import { Lux, BN, Buffer } from "lux/dist"
import {
  AVMAPI,
  KeyChain as AVMKeyChain,
  UTXOSet,
  UnsignedTx,
  Tx
} from "lux/dist/apis/avm"
import {
  GetBalanceResponse,
  GetUTXOsResponse
} from "lux/dist/apis/avm/interfaces"
import { KeyChain as EVMKeyChain, EVMAPI } from "lux/dist/apis/evm"
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
const xchain: AVMAPI = lux.XChain()
const cchain: EVMAPI = lux.CChain()
const xKeychain: AVMKeyChain = xchain.keyChain()
const cKeychain: EVMKeyChain = cchain.keyChain()
const privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`
xKeychain.importKey(privKey)
cKeychain.importKey(privKey)
const xAddressStrings: string[] = xchain.keyChain().getAddressStrings()
const cAddressStrings: string[] = cchain.keyChain().getAddressStrings()
const cChainBlockchainID: string = Defaults.network[networkID].C.blockchainID
const luxAssetID: string = Defaults.network[networkID].X.luxAssetID
const locktime: BN = new BN(0)
const asOf: BN = UnixNow()
const memo: Buffer = Buffer.from(
  "AVM utility method buildExportTx to export LUX to the C-Chain from the X-Chain"
)
const fee: BN = xchain.getDefaultTxFee()

const main = async (): Promise<any> => {
  const avmUTXOResponse: GetUTXOsResponse = await xchain.getUTXOs(
    xAddressStrings
  )
  const utxoSet: UTXOSet = avmUTXOResponse.utxos
  const getBalanceResponse: GetBalanceResponse = await xchain.getBalance(
    xAddressStrings[0],
    luxAssetID
  )
  const balance: BN = new BN(getBalanceResponse.balance)
  const amount: BN = balance.sub(fee)

  const unsignedTx: UnsignedTx = await xchain.buildExportTx(
    utxoSet,
    amount,
    cChainBlockchainID,
    cAddressStrings,
    xAddressStrings,
    xAddressStrings,
    memo,
    asOf,
    locktime
  )

  const tx: Tx = unsignedTx.sign(xKeychain)
  const txid: string = await xchain.issueTx(tx)
  console.log(`Success! TXID: ${txid}`)
}

main()
