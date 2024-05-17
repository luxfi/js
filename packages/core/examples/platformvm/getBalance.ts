import { Lux } from "lux/dist"
import { PlatformVMAPI } from "lux/dist/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = lux.PChain()

const main = async (): Promise<any> => {
  const address: string = "P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"
  const balance: object = await pchain.getBalance(address)
  console.log(balance)
}

main()
