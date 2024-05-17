import type { Field } from "./field-value";
import type { MaybeArray } from "./type-utils";

export type TableRow = TableValueCell[];

export type VerticalTableRow = [TableHeaderCell, TableValueCell];

export type TableHeaderCell = {
  label: string;
  description?: string;
};

export type TableValueCell = MaybeArray<Field>;
