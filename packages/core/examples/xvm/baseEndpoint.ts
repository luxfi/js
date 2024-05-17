import { Lux } from "lux/dist"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const baseEndpoint: string = "rpc"
const lux: Lux = new Lux(ip, port, protocol, networkID)
lux.setAddress(ip, port, protocol, baseEndpoint)

const main = async (): Promise<any> => {
  const baseEndpoint: string = lux.getBaseEndpoint()
  console.log(baseEndpoint)
}

main()
