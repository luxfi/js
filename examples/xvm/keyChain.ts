import { Lux } from "lux/dist"
import { XVMAPI, KeyChain } from "lux/dist/apis/xvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: XVMAPI = lux.XChain()

const main = async (): Promise<any> => {
  const keyChain: KeyChain = xchain.keyChain()
  console.log(keyChain)
}

main()
