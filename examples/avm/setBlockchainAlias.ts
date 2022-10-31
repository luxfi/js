import { Lux } from "lux/dist"
import { AVMAPI } from "lux/dist/apis/avm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: AVMAPI = lux.XChain()

const main = async (): Promise<any> => {
  const newAlias: string = "myXChain"
  xchain.setBlockchainAlias(newAlias)
}

main()
