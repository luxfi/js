import mockAxios from "jest-mock-axios"
import { Lux, LuxCore } from "../src"
import { XVMAPI } from "../src/apis/xvm/api"
import { AdminAPI } from "../src/apis/admin/api"
import { HealthAPI } from "../src/apis/health/api"
import { InfoAPI } from "../src/apis/info/api"
import { KeystoreAPI } from "../src/apis/keystore/api"
import { MetricsAPI } from "../src/apis/metrics/api"
import { PlatformVMAPI } from "../src/apis/platformvm/api"
import { TestAPI } from "./testlib"
import { AxiosRequestConfig } from "axios"
import { HttpResponse } from "jest-mock-axios"

describe("Lux", (): void => {
  const blockchainID: string =
    "6h2s5de1VC65meajE1L2PjvZ1MXvHc3F6eqPCGKuDt4MxiweF"
  let host: string = "127.0.0.1"
  const port: number = 9650
  const networkID: number = 1337
  let protocol: string = "https"
  let lux: Lux
  let luxCore: LuxCore
  const api: string = "api.lux.network"
  const url: string = "https://api.lux.network:9650"
  const encrypted: string = "https"
  const skipinit: boolean = true
  beforeAll((): void => {
    lux = new Lux(
      host,
      port,
      protocol,
      networkID,
      undefined,
      undefined,
      undefined,
      skipinit
    )
    lux.addAPI("admin", AdminAPI)
    lux.addAPI("xchain", XVMAPI, "/ext/subnet/xvm", blockchainID)
    lux.addAPI("health", HealthAPI)
    lux.addAPI("info", InfoAPI)
    lux.addAPI("keystore", KeystoreAPI)
    lux.addAPI("metrics", MetricsAPI)
    lux.addAPI("pchain", PlatformVMAPI)
  })
  test("Remove special characters", (): void => {
    host = "a&&&&p#i,.@a+v(a)x$.~n%e't:w*o?r<k>"
    protocol = "h@t&@&@t#p+s()$"
    lux = new Lux(host, port, protocol, networkID)
    expect(lux.getHost()).toBe(api)
    expect(lux.getProtocol()).toBe(encrypted)
    expect(lux.getURL()).toBe(url)
    luxCore = new LuxCore(host, port, protocol)
    expect(luxCore.getHost()).toBe(api)
    expect(luxCore.getProtocol()).toBe(encrypted)
    expect(luxCore.getURL()).toBe(url)
  })
  test("Can specify base endpoint", (): void => {
    lux = new Lux()
    lux.setAddress(api, port, encrypted, "rpc")
    lux.setNetworkID(networkID)
    expect(lux.getHost()).toBe(api)
    expect(lux.getProtocol()).toBe(encrypted)
    expect(lux.getPort()).toBe(port)
    expect(lux.getBaseEndpoint()).toBe("rpc")
    expect(lux.getURL()).toBe(`${url}/rpc`)
    expect(lux.getNetworkID()).toBe(networkID)
  })
  test("Can initialize without port", (): void => {
    protocol = encrypted
    host = api
    lux = new Lux(host, undefined, protocol, networkID)
    expect(lux.getPort()).toBe(undefined)
    expect(lux.getURL()).toBe(`${protocol}://${api}`)
    luxCore = new LuxCore(host, undefined, protocol)
    expect(luxCore.getPort()).toBe(undefined)
    expect(luxCore.getURL()).toBe(`${protocol}://${api}`)
  })
  test("Can initialize with port", (): void => {
    protocol = encrypted
    lux = new Lux(host, port, protocol, networkID)
    expect(lux.getIP()).toBe(host)
    expect(lux.getHost()).toBe(host)
    expect(lux.getPort()).toBe(port)
    expect(lux.getProtocol()).toBe(protocol)
    expect(lux.getURL()).toBe(`${protocol}://${host}:${port}`)
    expect(lux.getNetworkID()).toBe(1337)
    expect(lux.getHeaders()).toStrictEqual({})
    lux.setNetworkID(50)
    expect(lux.getNetworkID()).toBe(50)
    lux.setNetworkID(12345)
    expect(lux.getNetworkID()).toBe(12345)
  })

  test("Endpoints correct", (): void => {
    expect(lux.Admin()).not.toBeInstanceOf(XVMAPI)
    expect(lux.Admin()).toBeInstanceOf(AdminAPI)

    expect(lux.XChain()).not.toBeInstanceOf(AdminAPI)
    expect(lux.XChain()).toBeInstanceOf(XVMAPI)

    expect(lux.Health()).not.toBeInstanceOf(KeystoreAPI)
    expect(lux.Health()).toBeInstanceOf(HealthAPI)

    expect(lux.Info()).not.toBeInstanceOf(KeystoreAPI)
    expect(lux.Info()).toBeInstanceOf(InfoAPI)

    expect(lux.PChain()).not.toBeInstanceOf(KeystoreAPI)
    expect(lux.PChain()).toBeInstanceOf(PlatformVMAPI)

    expect(lux.NodeKeys()).not.toBeInstanceOf(PlatformVMAPI)
    expect(lux.NodeKeys()).toBeInstanceOf(KeystoreAPI)

    expect(lux.Metrics()).not.toBeInstanceOf(KeystoreAPI)
    expect(lux.Metrics()).toBeInstanceOf(MetricsAPI)

    expect(lux.Admin().getRPCID()).toBe(1)
    expect(lux.XChain().getRPCID()).toBe(1)
    expect(lux.PChain().getRPCID()).toBe(1)
    expect(lux.NodeKeys().getRPCID()).toBe(1)
  })

  test("Create new API", (): void => {
    lux.addAPI("xvm2", XVMAPI)
    expect(lux.api("xvm2")).toBeInstanceOf(XVMAPI)

    lux.addAPI("keystore2", KeystoreAPI, "/ext/keystore2")
    expect(lux.api("keystore2")).toBeInstanceOf(KeystoreAPI)

    lux.api("keystore2").setBaseURL("/ext/keystore3")
    expect(lux.api("keystore2").getBaseURL()).toBe("/ext/keystore3")

    expect(lux.api("keystore2").getDB()).toHaveProperty("namespace")
  })

  test("Customize headers", (): void => {
    lux.setHeader("X-Custom-Header", "example")
    lux.setHeader("X-Foo", "Foo")
    lux.setHeader("X-Bar", "Bar")
    expect(lux.getHeaders()).toStrictEqual({
      "X-Custom-Header": "example",
      "X-Foo": "Foo",
      "X-Bar": "Bar"
    })
    lux.removeHeader("X-Foo")
    expect(lux.getHeaders()).toStrictEqual({
      "X-Custom-Header": "example",
      "X-Bar": "Bar"
    })
    lux.removeAllHeaders()
    expect(lux.getHeaders()).toStrictEqual({})
  })

  test("Customize request config", (): void => {
    expect(lux.getRequestConfig()).toStrictEqual({})
    lux.setRequestConfig("withCredentials", true)
    lux.setRequestConfig("withFoo", "Foo")
    lux.setRequestConfig("withBar", "Bar")
    expect(lux.getRequestConfig()).toStrictEqual({
      withCredentials: true,
      withFoo: "Foo",
      withBar: "Bar"
    })
    lux.removeRequestConfig("withFoo")
    expect(lux.getRequestConfig()).toStrictEqual({
      withCredentials: true,
      withBar: "Bar"
    })
    lux.removeAllRequestConfigs()
    expect(lux.getRequestConfig()).toStrictEqual({})
  })
})

describe("HTTP Operations", (): void => {
  const host: string = "127.0.0.1"
  const port: number = 8080
  const protocol: string = "http"
  const path: string = "/ext/testingrequests"
  let lux: Lux
  beforeAll((): void => {
    lux = new Lux(
      host,
      port,
      protocol,
      12345,
      undefined,
      undefined,
      undefined,
      true
    )
    lux.addAPI("testingrequests", TestAPI, path)
  })

  afterEach((): void => {
    mockAxios.reset()
  })

  test("GET works", async (): Promise<void> => {
    const input: string = "TestGET"
    const api: TestAPI = lux.api("testingrequests")
    const result: Promise<object> = api.TestGET(input, `/${input}`)
    const payload: object = {
      result: {
        output: input
      }
    }
    const responseObj: HttpResponse = {
      data: payload
    }
    mockAxios.mockResponse(responseObj)
    const response: any = await result
    expect(mockAxios.request).toHaveBeenCalledTimes(1)
    expect(response.output).toBe(input)
  })

  test("DELETE works", async (): Promise<void> => {
    const input: string = "TestDELETE"
    const api: TestAPI = lux.api("testingrequests")
    const axiosConfig: AxiosRequestConfig = {
      baseURL: `${protocol}://${host}:${port}`,
      responseType: "text"
    }
    const result: Promise<object> = api.TestDELETE(
      input,
      `/${input}`,
      axiosConfig
    )
    const payload: object = {
      result: {
        output: input
      }
    }
    const responseObj: HttpResponse = {
      data: payload
    }
    mockAxios.mockResponse(responseObj)
    const response: any = await result
    expect(mockAxios.request).toHaveBeenCalledTimes(1)
    expect(response.output).toBe(input)
  })

  test("POST works", async (): Promise<void> => {
    const input: string = "TestPOST"
    const api: TestAPI = lux.api("testingrequests")
    const result: Promise<object> = api.TestPOST(input, `/${input}`)
    const payload: object = {
      result: {
        output: input
      }
    }
    const responseObj: HttpResponse = {
      data: payload
    }
    mockAxios.mockResponse(responseObj)
    const response: any = await result
    expect(mockAxios.request).toHaveBeenCalledTimes(1)
    expect(response.output).toBe(input)
  })

  test("PUT works", async (): Promise<void> => {
    const input: string = "TestPUT"
    const api: TestAPI = lux.api("testingrequests")
    const result: Promise<object> = api.TestPUT(input, `/${input}`)
    const payload: object = {
      result: {
        output: input
      }
    }
    const responseObj: HttpResponse = {
      data: payload
    }
    mockAxios.mockResponse(responseObj)
    const response: any = await result
    expect(mockAxios.request).toHaveBeenCalledTimes(1)
    expect(response.output).toBe(input)
  })

  test("PATCH works", async (): Promise<void> => {
    const input: string = "TestPATCH"
    const api: TestAPI = lux.api("testingrequests")
    const result: Promise<object> = api.TestPATCH(input, `/${input}`)
    const payload: object = {
      result: {
        output: input
      }
    }
    const responseObj: HttpResponse = {
      data: payload
    }
    mockAxios.mockResponse(responseObj)
    const response: any = await result
    expect(mockAxios.request).toHaveBeenCalledTimes(1)
    expect(response.output).toBe(input)
  })
})
