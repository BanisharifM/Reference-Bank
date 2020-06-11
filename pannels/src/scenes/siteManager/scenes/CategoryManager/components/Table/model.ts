export interface column {
    path:string,
    label:string,
    type:string
}
export interface features {
    paginating: boolean,
    defaultPageSize: number,
    filtering: boolean,
    tableSizing: boolean,
    hasAction: boolean,
    addable: boolean,
    editable: boolean,
    deletable: boolean,
}

export interface category{
    id:string,
    name:string,
    image:string,
    slider:string[],
}

export interface pageAction {
    status:boolean,
    element:category|{}
}