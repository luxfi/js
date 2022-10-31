import { Lux } from "lux/dist"
import { IndexAPI } from "lux/dist/apis/index"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const index: IndexAPI = lux.Index()

const main = async (): Promise<any> => {
  const id: string = "eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX"
  const encoding: string = "hex"
  const baseurl: string = "/ext/index/X/tx"
  const containerIndex: string = await index.getIndex(id, encoding, baseurl)
  console.log(containerIndex)
}

main()
