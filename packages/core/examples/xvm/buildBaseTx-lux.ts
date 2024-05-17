import { Lux, BN, Buffer } from "lux/dist"
import { XVMAPI, KeyChain, UTXOSet, UnsignedTx, Tx } from "lux/dist/apis/xvm"
import {
  GetBalanceResponse,
  GetUTXOsResponse
} from "lux/dist/apis/xvm/interfaces"
import { Defaults } from "lux/dist/utils"
import {
  PrivateKeyPrefix,
  DefaultLocalGenesisPrivateKey,
  UnixNow
} from "lux/dist/utils"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const xBlockchainID: string = Defaults.network[networkID].X.blockchainID
const luxAssetID: string = Defaults.network[networkID].X.luxAssetID
const lux: Lux = new Lux(ip, port, protocol, networkID, xBlockchainID)
const xchain: XVMAPI = lux.XChain()
const xKeychain: KeyChain = xchain.keyChain()
const privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`
xKeychain.importKey(privKey)
const xAddressStrings: string[] = xchain.keyChain().getAddressStrings()
const asOf: BN = UnixNow()
const threshold: number = 1
const locktime: BN = new BN(0)
const memo: Buffer = Buffer.from("XVM utility method buildBaseTx to send LUX")
const fee: BN = xchain.getDefaultTxFee()

const main = async (): Promise<any> => {
  const getBalanceResponse: GetBalanceResponse = await xchain.getBalance(
    xAddressStrings[0],
    luxAssetID
  )
  const balance: BN = new BN(getBalanceResponse.balance)
  const xvmUTXOResponse: GetUTXOsResponse = await xchain.getUTXOs(
    xAddressStrings
  )
  const utxoSet: UTXOSet = xvmUTXOResponse.utxos
  const amount: BN = balance.sub(fee)

  const unsignedTx: UnsignedTx = await xchain.buildBaseTx(
    utxoSet,
    amount,
    luxAssetID,
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
