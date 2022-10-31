import { Lux } from "lux/dist"
import { EVMAPI } from "lux/dist/apis/evm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const cchain: EVMAPI = lux.CChain()

const main = async (): Promise<any> => {
  const txID: string = "2GD5SRYJQr2kw5jE73trBFiAgVQyrCaeg223TaTyJFYXf2kPty"
  const status: string = await cchain.getAtomicTx(txID)
  console.log(status)
}

main()
