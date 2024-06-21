import { Lux } from "lux/dist"
import { KeystoreAPI } from "lux/dist/apis/keystore"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const keystore: KeystoreAPI = lux.NodeKeys()

const main = async (): Promise<any> => {
  const username: string = "username"
  const password: string = "Vz48jjHLTCcAepH95nT4B"
  const successful: boolean = await keystore.createUser(username, password)
  console.log(successful)
}

main()
