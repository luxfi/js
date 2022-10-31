import { Lux, Buffer } from "lux/dist"
import { AVMAPI } from "lux/dist/apis/avm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: AVMAPI = lux.XChain()

const main = async (): Promise<any> => {
  const newAssetID: string = "11FtAxv"
  xchain.setLUXAssetID(newAssetID)
  const assetID: Buffer = await xchain.getLUXAssetID()
  console.log(assetID)
}

main()
