import { Lux, Buffer } from "../../src"
import { XVMAPI, Tx } from "../../src/apis/xvm"

const ip: string = "api.lux.network"
const port: number = 443
const protocol: string = "https"
const networkID: number = 1
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: XVMAPI = lux.XChain()

const main = async (): Promise<any> => {
  const txID: string = "2fJer7o3HpPYxqyHXo23G4HoPvfEqcUXYojMULi2mbBEoBFqoM"
  const hex = (await xchain.getTx(txID)) as string
  const buf: Buffer = new Buffer(hex.slice(2), "hex")
  const tx: Tx = new Tx()
  tx.fromBuffer(buf)
  const jsonStr: string = JSON.stringify(tx)
  console.log(jsonStr)
  const jsn: Object = JSON.parse(jsonStr)
  console.log(jsn)
}

main()
