import { Lux } from "lux/dist"
import { AdminAPI } from "lux/dist/apis/admin"
import { Defaults } from "lux/dist/utils"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const admin: AdminAPI = lux.Admin()

const main = async (): Promise<any> => {
  const blockchain: string = Defaults.network[networkID].X.blockchainID
  const aliases: string[] = await admin.getChainAliases(blockchain)
  console.log(aliases)
}

main()
