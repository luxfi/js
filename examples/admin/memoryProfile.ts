import { Lux } from "lux/dist"
import { AdminAPI } from "lux/dist/apis/admin"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const admin: AdminAPI = lux.Admin()

const main = async (): Promise<any> => {
  const successful: boolean = await admin.memoryProfile()
  console.log(successful)
}

main()
