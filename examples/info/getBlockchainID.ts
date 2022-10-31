import { Lux } from "lux/dist"
import { InfoAPI } from "lux/dist/apis/info"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const info: InfoAPI = lux.Info()

const main = async (): Promise<any> => {
  const alias: string = "X"
  const blockchainID: string = await info.getBlockchainID(alias)
  console.log(blockchainID)
}

main()
