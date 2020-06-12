export interface column {
  path: string;
  label: string;
  type: string;
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

export interface category {
  id: string;
  name: string;
  image: string;
  slider: string[];
  [k: string]: string | string[];
}

export interface pageAction<T> {
  status: boolean;
  element: T | {};
}
