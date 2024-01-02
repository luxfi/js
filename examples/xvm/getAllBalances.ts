import { Lux } from "lux/dist"
import { XVMAPI } from "lux/dist/apis/xvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: XVMAPI = lux.XChain()

const main = async (): Promise<any> => {
  const address: string = "X-custom18jma8ppw3nhx5r4ap8clazz0dps7rv5u9xde7p"
  const balances: object[] = await xchain.getAllBalances(address)
  console.log(balances)
}

main()
