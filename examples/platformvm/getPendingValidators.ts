import { Lux } from "lux/dist"
import { PlatformVMAPI } from "lux/dist/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = lux.PChain()

const main = async (): Promise<any> => {
  const subnetID: string = "11111111111111111111111111111111LpoYY"
  const nodeIDs: string[] = []
  const pendingValidators: object = await pchain.getPendingValidators(subnetID)
  console.log(pendingValidators)
}

main()
