import { Lux, BN, Buffer } from "lux/dist"
import {
  XVMAPI,
  KeyChain as XVMKeyChain,
  UTXOSet,
  UnsignedTx,
  Tx
} from "lux/dist/apis/xvm"
import {
  GetBalanceResponse,
  GetUTXOsResponse
} from "lux/dist/apis/xvm/interfaces"
import {
  KeyChain as PlatformVMKeyChain,
  PlatformVMAPI
} from "lux/dist/apis/platformvm"
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
const pchain: PlatformVMAPI = lux.PChain()
const xKeychain: XVMKeyChain = xchain.keyChain()
const pKeychain: PlatformVMKeyChain = pchain.keyChain()
const privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`
xKeychain.importKey(privKey)
pKeychain.importKey(privKey)
const xAddressStrings: string[] = xchain.keyChain().getAddressStrings()
const pAddressStrings: string[] = pchain.keyChain().getAddressStrings()
const pChainBlockchainID: string = Defaults.network[networkID].P.blockchainID
const luxAssetID: string = Defaults.network[networkID].X.luxAssetID
const locktime: BN = new BN(0)
const asOf: BN = UnixNow()
const memo: Buffer = Buffer.from(
  "XVM utility method buildExportTx to export LUX to the P-Chain from the X-Chain"
)
const fee: BN = xchain.getDefaultTxFee()

const main = async (): Promise<any> => {
  const xvmUTXOResponse: GetUTXOsResponse = await xchain.getUTXOs(
    xAddressStrings
  )
  const utxoSet: UTXOSet = xvmUTXOResponse.utxos
  const getBalanceResponse: GetBalanceResponse = await xchain.getBalance(
    xAddressStrings[0],
    luxAssetID
  )
  const balance: BN = new BN(getBalanceResponse.balance)
  const amount: BN = balance.sub(fee)

  const unsignedTx: UnsignedTx = await xchain.buildExportTx(
    utxoSet,
    amount,
    pChainBlockchainID,
    pAddressStrings,
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
