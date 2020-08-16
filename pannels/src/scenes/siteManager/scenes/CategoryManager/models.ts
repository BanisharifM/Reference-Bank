export interface ITableCategory {
  // this is a Interface similar to ICaregoryRes bu with different children key
  id: number;
  title: string;
  parent?: number | null;
  parent_title?: string;
  subRows: ITableCategory[] | [];
}

export type TCategoryTableData = ITableCategory & {
  expander: any;
  options: any;
};
