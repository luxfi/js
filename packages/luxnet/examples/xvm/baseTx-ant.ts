import { Lux, BinTools, BN, Buffer } from "lux/dist"
import {
  XVMAPI,
  KeyChain,
  SECPTransferOutput,
  SECPTransferInput,
  TransferableOutput,
  TransferableInput,
  UTXOSet,
  UTXO,
  AmountOutput,
  UnsignedTx,
  Tx,
  BaseTx
} from "lux/dist/apis/xvm"
import {
  Defaults,
  PrivateKeyPrefix,
  DefaultLocalGenesisPrivateKey
} from "lux/dist/utils"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const lux: Lux = new Lux(ip, port, protocol, networkID)
const xchain: XVMAPI = lux.XChain()
const bintools: BinTools = BinTools.getInstance()
const xKeychain: KeyChain = xchain.keyChain()
const privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`
xKeychain.importKey(privKey)
const xAddresses: Buffer[] = xchain.keyChain().getAddresses()
const xAddressStrings: string[] = xchain.keyChain().getAddressStrings()
const blockchainID: string = Defaults.network[networkID].X.blockchainID
const luxAssetID: string = Defaults.network[networkID].X.luxAssetID
const luxAssetIDBuf: Buffer = bintools.cb58Decode(luxAssetID)
const outputs: TransferableOutput[] = []
const inputs: TransferableInput[] = []
const fee: BN = xchain.getDefaultTxFee()
const threshold: number = 1
const locktime: BN = new BN(0)
const memo: Buffer = Buffer.from("XVM manual BaseTx to send LUX and ANT")
// Uncomment for codecID 00 01
// const codecID: number = 1

const main = async (): Promise<any> => {
  const xvmUTXOResponse: any = await xchain.getUTXOs(xAddressStrings)
  const utxoSet: UTXOSet = xvmUTXOResponse.utxos
  const utxos: UTXO[] = utxoSet.getAllUTXOs()
  utxos.forEach((utxo: UTXO): void => {
    const typeID: number = utxo.getOutput().getTypeID()
    if (typeID != 6) {
      const amountOutput: AmountOutput = utxo.getOutput() as AmountOutput
      const amt: BN = amountOutput.getAmount().clone()
      const txID: Buffer = utxo.getTxID()
      const outputIDX: Buffer = utxo.getOutputIdx()
      const assetID: Buffer = utxo.getAssetID()

      if (assetID.toString("hex") === luxAssetIDBuf.toString("hex")) {
        const secpTransferOutput: SECPTransferOutput = new SECPTransferOutput(
          amt.sub(fee),
          xAddresses,
          locktime,
          threshold
        )
        // Uncomment for codecID 00 01
        // secpTransferOutput.setCodecID(codecID)
        const transferableOutput: TransferableOutput = new TransferableOutput(
          luxAssetIDBuf,
          secpTransferOutput
        )
        outputs.push(transferableOutput)

        const secpTransferInput: SECPTransferInput = new SECPTransferInput(amt)
        // Uncomment for codecID 00 01
        // secpTransferInput.setCodecID(codecID)
        secpTransferInput.addSignatureIdx(0, xAddresses[0])
        const input: TransferableInput = new TransferableInput(
          txID,
          outputIDX,
          luxAssetIDBuf,
          secpTransferInput
        )
        inputs.push(input)
      } else {
        const secpTransferOutput: SECPTransferOutput = new SECPTransferOutput(
          amt,
          xAddresses,
          locktime,
          threshold
        )
        // Uncomment for codecID 00 01
        // secpTransferOutput.setCodecID(codecID)
        const transferableOutput: TransferableOutput = new TransferableOutput(
          assetID,
          secpTransferOutput
        )
        outputs.push(transferableOutput)

        const secpTransferInput: SECPTransferInput = new SECPTransferInput(amt)
        // Uncomment for codecID 00 01
        // secpTransferInput.setCodecID(codecID)
        secpTransferInput.addSignatureIdx(0, xAddresses[0])
        const input: TransferableInput = new TransferableInput(
          txID,
          outputIDX,
          assetID,
          secpTransferInput
        )
        inputs.push(input)
      }
    }
  })

  const baseTx: BaseTx = new BaseTx(
    networkID,
    bintools.cb58Decode(blockchainID),
    outputs,
    inputs,
    memo
  )
  // Uncomment for codecID 00 01
  // baseTx.setCodecID(codecID)
  const unsignedTx: UnsignedTx = new UnsignedTx(baseTx)
  const tx: Tx = unsignedTx.sign(xKeychain)
  const txid: string = await xchain.issueTx(tx)
  console.log(`Success! TXID: ${txid}`)
}

main()
