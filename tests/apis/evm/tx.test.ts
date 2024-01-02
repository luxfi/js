import {
  ExportTx,
  ImportTx,
  SECPTransferInput,
  TransferableInput
} from "../../../src/apis/evm"
import {
  Defaults,
  MILLILUX,
  PlatformChainID
} from "../../../src/utils/constants"
import { ONELUX } from "../../../src/utils/constants"
import { EVMOutput } from "../../../src/apis/evm"
import BN from "bn.js"
import { BinTools, Buffer } from "src"
const networkID: number = 1337
const cHexAddress1: string = "0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"
const bintools: BinTools = BinTools.getInstance()
const cHexAddress2: string = "0xecC3B2968B277b837a81A7181e0b94EB1Ca54EdE"
const antAssetID: string = "F4MyJcUvq3Rxbqgd4Zs8sUpvwLHApyrp4yxJXe2bAV86Vvp38"
const luxAssetID: string = Defaults.network[networkID].X.luxAssetID
const txID: string = "QVb7DtKjcwVYLFWHgnGSdzQtQSc29KeRBYFNCBnbFu6dFqX7z"
const blockchainID: string = Defaults.network[networkID].C.blockchainID
const sourcechainID: string = Defaults.network[networkID].X.blockchainID
let evmOutputs: EVMOutput[]
let importedIns: TransferableInput[]
const fee: BN = Defaults.network[networkID].C.txFee

beforeEach((): void => {
  evmOutputs = []
  importedIns = []
})

describe("EVM Transactions", () => {
  describe("ImportTx", () => {
    test("Multiple LUX EVMOutput fail", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(ONELUX)
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)
      // Creating 2 outputs with the same address and LUX assetID is invalid
      let evmOutput: EVMOutput = new EVMOutput(cHexAddress1, ONELUX, luxAssetID)
      evmOutputs.push(evmOutput)
      evmOutput = new EVMOutput(cHexAddress1, ONELUX, luxAssetID)
      evmOutputs.push(evmOutput)

      expect((): void => {
        new ImportTx(
          networkID,
          bintools.cb58Decode(blockchainID),
          bintools.cb58Decode(sourcechainID),
          importedIns,
          evmOutputs
        )
      }).toThrow(
        "Error - ImportTx: duplicate (address, assetId) pair found in outputs: (0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc, BUuypiq2wyuLMvyhzFXcPyxPMCgSp7eeDohhQRqTChoBjKziC)"
      )
    })

    test("Multiple LUX EVMOutput success", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(ONELUX)
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)
      // Creating 2 outputs with different addresses valid
      let evmOutput: EVMOutput = new EVMOutput(
        cHexAddress1,
        ONELUX.div(new BN(3)),
        luxAssetID
      )
      evmOutputs.push(evmOutput)
      evmOutput = new EVMOutput(cHexAddress2, ONELUX.div(new BN(3)), luxAssetID)
      evmOutputs.push(evmOutput)

      const importTx: ImportTx = new ImportTx(
        networkID,
        bintools.cb58Decode(blockchainID),
        bintools.cb58Decode(sourcechainID),
        importedIns,
        evmOutputs
      )
      expect(importTx).toBeInstanceOf(ImportTx)
      expect(importTx.getSourceChain().toString("hex")).toBe(
        bintools.cb58Decode(sourcechainID).toString("hex")
      )
    })

    test("Multiple ANT EVMOutput fail", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(new BN(507))
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)
      // Creating 2 outputs with the same address and ANT assetID is invalid
      let evmOutput: EVMOutput = new EVMOutput(cHexAddress1, ONELUX, antAssetID)
      evmOutputs.push(evmOutput)
      evmOutput = new EVMOutput(cHexAddress1, ONELUX, antAssetID)
      evmOutputs.push(evmOutput)
      expect((): void => {
        new ImportTx(
          networkID,
          bintools.cb58Decode(blockchainID),
          bintools.cb58Decode(sourcechainID),
          importedIns,
          evmOutputs
        )
      }).toThrow(
        "Error - ImportTx: duplicate (address, assetId) pair found in outputs: (0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc, F4MyJcUvq3Rxbqgd4Zs8sUpvwLHApyrp4yxJXe2bAV86Vvp38)"
      )
    })

    test("Multiple ANT EVMOutput success", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(fee)
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)
      let evmOutput: EVMOutput = new EVMOutput(cHexAddress1, ONELUX, antAssetID)
      evmOutputs.push(evmOutput)
      evmOutput = new EVMOutput(cHexAddress2, ONELUX, antAssetID)
      evmOutputs.push(evmOutput)

      const importTx: ImportTx = new ImportTx(
        networkID,
        bintools.cb58Decode(blockchainID),
        bintools.cb58Decode(sourcechainID),
        importedIns,
        evmOutputs
      )
      expect(importTx).toBeInstanceOf(ImportTx)
    })

    test("Single ANT EVMOutput fail", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(new BN(0))
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)

      // If the output is a non-lux assetID then don't subtract a fee
      const evmOutput: EVMOutput = new EVMOutput(
        cHexAddress1,
        ONELUX,
        antAssetID
      )
      evmOutputs.push(evmOutput)
      const baseFee: BN = new BN(25000000000)
      expect((): void => {
        new ImportTx(
          networkID,
          bintools.cb58Decode(blockchainID),
          bintools.cb58Decode(sourcechainID),
          importedIns,
          evmOutputs,
          baseFee
        )
      }).toThrow(
        "Error - 25000000000 nLUX required for fee and only 0 nLUX provided"
      )
    })

    test("Single ANT EVMOutput success", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(ONELUX)
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)
      const evmOutput: EVMOutput = new EVMOutput(
        cHexAddress1,
        ONELUX,
        antAssetID
      )
      evmOutputs.push(evmOutput)
      const importTx: ImportTx = new ImportTx(
        networkID,
        bintools.cb58Decode(blockchainID),
        bintools.cb58Decode(sourcechainID),
        importedIns,
        evmOutputs
      )
      expect(importTx).toBeInstanceOf(ImportTx)
    })

    test("Single LUX EVMOutput fail", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(new BN(507))
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)

      const evmOutput: EVMOutput = new EVMOutput(
        cHexAddress1,
        new BN(0),
        luxAssetID
      )
      evmOutputs.push(evmOutput)
      const baseFee: BN = new BN(25000000000)
      expect((): void => {
        new ImportTx(
          networkID,
          bintools.cb58Decode(blockchainID),
          bintools.cb58Decode(sourcechainID),
          importedIns,
          evmOutputs,
          baseFee
        )
      }).toThrow(
        "Error - 25000000000 nLUX required for fee and only 507 nLUX provided"
      )
    })

    test("Single LUX EVMOutput success", (): void => {
      const outputidx: Buffer = Buffer.from("")
      const input: SECPTransferInput = new SECPTransferInput(ONELUX)
      const xferin: TransferableInput = new TransferableInput(
        bintools.cb58Decode(txID),
        outputidx,
        bintools.cb58Decode(luxAssetID),
        input
      )
      importedIns.push(xferin)
      const evmOutput: EVMOutput = new EVMOutput(
        cHexAddress1,
        ONELUX.sub(MILLILUX),
        luxAssetID
      )
      evmOutputs.push(evmOutput)
      const importTx: ImportTx = new ImportTx(
        networkID,
        bintools.cb58Decode(blockchainID),
        bintools.cb58Decode(sourcechainID),
        importedIns,
        evmOutputs
      )
      expect(importTx).toBeInstanceOf(ImportTx)
    })
  })
  describe("ExportTx", () => {
    test("getDestinationChain", (): void => {
      const exportTx: ExportTx = new ExportTx(
        networkID,
        bintools.cb58Decode(blockchainID),
        bintools.cb58Decode(PlatformChainID)
      )
      expect(exportTx).toBeInstanceOf(ExportTx)
      expect(exportTx.getDestinationChain().toString("hex")).toBe(
        bintools.cb58Decode(PlatformChainID).toString("hex")
      )
    })
  })
})
