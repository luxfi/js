import { Lux } from "lux/dist"
import { HealthAPI } from "lux/dist/apis/health"
import { HealthResponse } from "lux/dist/apis/health/interfaces"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const health: HealthAPI = lux.Health()

const main = async (): Promise<any> => {
  const healthResponse: HealthResponse = await health.health()
  console.log(healthResponse)
}

main()
