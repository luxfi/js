import { Lux } from "lux/dist"
import { MetricsAPI } from "lux/dist/apis/metrics"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const metrics: MetricsAPI = lux.Metrics()

const main = async (): Promise<any> => {
  const m: string = await metrics.getMetrics()
  console.log(m)
}

main()
