import type { PageSection } from "./page-section";

export type CreateVmParse<TFetchers extends GetPageDataFetchers> = (
  rpcUrl: string,
) => {
  [TPageName in keyof TFetchers]?: TFetchers[TPageName] extends GetPageData
    ? VmPageConfig<TFetchers[TPageName]>
    : never;
};

type VmPageConfig<TGetPageData extends GetPageData> = {
  /**
   * A function that fetches the data for the page
   */
  getPageData: TGetPageData;

  /**
   * A function that formats the data for display on the page.
   *
   * @param data The data returned from `getPageData`.
   * @returns An array of sections to display on the page.
   */
  getPageDisplayFormat: (
    data: Awaited<ReturnType<TGetPageData>>,
  ) => PageSection[];
};

type GetPageDataFetchers = {
  transactionDetails?: (txId: string) => Promise<unknown>;
  addressDetails?: (address: string) => Promise<unknown>;
};

type GetPageData = (...args: any[]) => Promise<unknown>;
