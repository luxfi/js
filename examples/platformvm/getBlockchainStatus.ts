import { Lux } from "lux/dist"
import { PlatformVMAPI } from "lux/dist/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = lux.PChain()

const main = async (): Promise<any> => {
  const blockchainID: string =
    "2AymB4Mb6mErFNsDB8aWb77Ui8oyogXgDyRe9RVQBtqfXzKoUc"
  const blockchainStatus: string = await pchain.getBlockchainStatus(
    blockchainID
  )
  console.log(blockchainStatus)
}

main()
