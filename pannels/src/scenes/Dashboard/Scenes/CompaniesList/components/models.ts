import {ICompanyRes} from "../../../../../services/utils/api/models";

export type TCompanyTableData = 
    Partial<ICompanyRes >&{ identifier: number }
