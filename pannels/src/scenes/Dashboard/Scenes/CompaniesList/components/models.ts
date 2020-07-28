import {ICompanyRes} from "../../../../../services/utils/api/Admin/models";

export type TCompanyTableData = 
    Partial<ICompanyRes >&{ identifier: number }
