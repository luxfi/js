import type { VerticalTableRow } from "./table";

export type PageSection = {
  /**
   * The title of the section.  Displayed as a card title.
   */
  title?: string;

  /**
   * Whether the section should be displayed as a full width card or a half width card.
   * Note: half-width cards become full width on smaller screens.
   */
  width: "full-width" | "half-width";
} & {
  /**
   * The table is displayed as two columns,
   * with the left column as the field title
   * and the right column as the field value.
   */
  format: "table-vertical";

  /**
   *
   */
  tableRows: VerticalTableRow[];
};
// TODO: Add support for horizontal tables
// | {
//     /**
//      * The table is displayed as any number of columns, and rows
//      * with the first row as the field titles
//      */
//     format: 'table-horizontal';

//     tableHeader: TableRow;

//     /**
//      *
//      */
//     tableRows: TableRow[];
//   }
