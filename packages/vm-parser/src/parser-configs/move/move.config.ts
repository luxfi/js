import { COMMON_FIELDS } from "../../types/common-fields";
import { Color, DataDisplayAs, UriDestination } from "../../types/field-value";
import { type CreateVmParse } from "../../types/parser-config";
import { fetcher } from "../../utils/fetcher";
import { type MoveTxDetails } from "./types/transaction-details";

export const createMoveVmConfig: CreateVmParse<{
  transactionDetails: (txId: string) => Promise<MoveTxDetails>;
}> = (rpcUrl: string) => {
  const moveVmClient = async <TResponse = unknown>(
    method: string,
    params: unknown[],
  ) => {
    return await fetcher<TResponse>(rpcUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json;",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method,
        params,
      }),
    });
  };

  return {
    transactionDetails: {
      getPageData: async (txId) => {
        const { result } = await moveVmClient<{ result: MoveTxDetails }>(
          "getTransactionByHash",
          [
            {
              data: txId,
            },
          ],
        );

        return result;
      },
      getPageDisplayFormat: (tx) => {
        return [
          {
            title: "Transaction Details",
            format: "table-vertical",
            width: "full-width",
            tableRows: [
              [
                COMMON_FIELDS.TRANSACTION_HASH,
                {
                  displayAs: DataDisplayAs.HASH,
                  options: {
                    value: tx.data.hash,
                    color: Color.TEXT_PRIMARY,
                    linkOptions: {
                      toDestination: UriDestination.TRANSACTION_PAGE,
                      toValue: tx.data.hash,
                    },
                  },
                },
              ],
            ],
          },
        ];
      },
    },
  };
};

// return [
//   {
//     title: 'Transaction Details',
//     fields: [
//       {
//         name: 'Tx Hash',
//         description: 'The hash of the transaction.',
//         displayInfo: {
//           value: tx.data.hash,
//           displayAs: DataDisplayAs.HASH,
//           uriDestination: UriDestination.TRANSACTION_PAGE,
//           uriValue: tx.data.hash,
//           textColor: 'text.primary',
//         },
//       },
//       {
//         name: 'From',
//         description: 'The sender of the transaction.',
//         displayInfo: {
//           value: tx.data.sender,
//           displayAs: DataDisplayAs.HASH,
//           uriDestination: UriDestination.ADDRESS_PAGE,
//           uriValue: tx.data.sender,
//           textColor: 'text.primary',
//         },
//       },
//       {
//         name: 'Status',
//         description: 'Whether the transaction succeeded or failed.',
//         displayInfo: {
//           value: tx.data.vm_status === MoveTxStatus.SUCCESS ? 'Success' : 'Failed',
//           displayAs: DataDisplayAs.TEXT,
//           textColor: tx.data.vm_status === MoveTxStatus.SUCCESS ? 'success' : 'error',
//         },
//       },
//       {
//         name: 'Gas Price',
//         description: 'The gas price of the transaction.',
//         // 1.234 Ⓜ️ MVMT
//         displayInfo: [
//           {
//             value: tx.data.gas_unit_price,
//             displayAs: DataDisplayAs.TEXT,
//           },
//           {
//             value:
//               'https://1788754675-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2FXJdUjb2rV41DvrRCWXQu%2Ficon%2Fi79XSuKKnzB2pJQwvFR8%2Flogo.svg?alt=media',
//             displayAs: DataDisplayAs.AVATAR_IMAGE,
//           },
//           {
//             value: 'MVMT',
//             displayAs: DataDisplayAs.TEXT,
//             textColor: 'text.secondary',
//           },
//         ],
//       },
//     ],
//   },
// ];
