export interface column {
  path: string;
  label: string;
  type: string;
}
export interface ISliderImage {
  image: string;
  index: number;
}
export interface IDefaultItem {
  id: string;
  [k: string]: string | ISliderImage[];
}
export interface features {
  paginating: boolean;
  defaultPageSize: number;
  filtering: boolean;
  tableSizing: boolean;
  hasAction: boolean;
  addable: boolean;
  editable: boolean;
  deletable: boolean;
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
  slider: ISliderImage[];
  [k: string]: string | ISliderImage[];
}

export interface pageAction<T> {
  status: boolean;
  element: T | {};
}
