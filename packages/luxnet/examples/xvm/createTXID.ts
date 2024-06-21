import createHash from "create-hash"
import { Lux, BN, Buffer } from "lux/dist"
import {
  XVMAPI,
  KeyChain as XVMKeyChain,
  UTXOSet,
  UnsignedTx,
  Tx
} from "lux/dist/apis/xvm"
import {
  KeyChain as PlatformVMKeyChain,
  PlatformVMAPI
} from "lux/dist/apis/platformvm"
import {
  PrivateKeyPrefix,
  DefaultLocalGenesisPrivateKey,
  Defaults,
  UnixNow,
  SerializedType
} from "lux/dist/utils"
import { Serialization } from "lux/dist/utils"

const serialization: Serialization = Serialization.getInstance()
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
const cb58: SerializedType = "cb58"

const main = async (): Promise<any> => {
  const xvmUTXOResponse: any = await xchain.getUTXOs(xAddressStrings)
  const utxoSet: UTXOSet = xvmUTXOResponse.utxos
  const getBalanceResponse: any = await xchain.getBalance(
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
  const buffer: Buffer = Buffer.from(
    createHash("sha256").update(tx.toBuffer()).digest().buffer
  )
  const txid: string = serialization.bufferToType(buffer, cb58)
  console.log(txid)
  // APfkX9NduHkZtghRpQASNZJjLut4ZAkVhkTGeazQerLSRa36t
}

main()
