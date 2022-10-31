import { Lux } from "lux/dist"
import { PlatformVMAPI } from "lux/dist/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = lux.PChain()

const main = async (): Promise<any> => {
  const txID: string = "x1NLb9JaHkKTXvSRReVSsFwQ38mY7bfD1Ky1BPv721VhrpuSE"
  const includeReason: boolean = true
  const tx: string | object = await pchain.getTxStatus(txID, includeReason)
  console.log(tx)
}

main()
