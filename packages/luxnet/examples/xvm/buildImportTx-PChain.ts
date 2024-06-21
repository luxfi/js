import { Lux, BN, Buffer } from "lux/dist"
import { XVMAPI, KeyChain, UTXOSet, UnsignedTx, Tx } from "lux/dist/apis/xvm"
import { GetUTXOsResponse } from "lux/dist/apis/xvm/interfaces"
import {
  PrivateKeyPrefix,
  DefaultLocalGenesisPrivateKey,
  Defaults,
  UnixNow
} from "lux/dist/utils"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: XVMAPI = lux.XChain()
const xKeychain: KeyChain = xchain.keyChain()
const privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`
xKeychain.importKey(privKey)
const xAddressStrings: string[] = xchain.keyChain().getAddressStrings()
const pChainBlockchainID: string = Defaults.network[networkID].P.blockchainID
const threshold: number = 1
const locktime: BN = new BN(0)
const asOf: BN = UnixNow()
const memo: Buffer = Buffer.from(
  "XVM utility method buildImportTx to import LUX to the X-Chain from the P-Chain"
)

const main = async (): Promise<any> => {
  const xvmUTXOResponse: GetUTXOsResponse = await xchain.getUTXOs(
    xAddressStrings,
    pChainBlockchainID
  )
  const utxoSet: UTXOSet = xvmUTXOResponse.utxos

  const unsignedTx: UnsignedTx = await xchain.buildImportTx(
    utxoSet,
    xAddressStrings,
    pChainBlockchainID,
    xAddressStrings,
    xAddressStrings,
    xAddressStrings,
    memo,
    asOf,
    locktime,
    threshold
  )
  const tx: Tx = unsignedTx.sign(xKeychain)
  const txid: string = await xchain.issueTx(tx)
  console.log(`Success! TXID: ${txid}`)
}

main()
