import React from "react";
import useSWR from "swr";
import Spinner from "../../../../components/Spinner";
import api from "../../../../services/utils/api";
import { ICompanyRes } from "../../../../services/utils/api/models";
import { baseCompanyUrl } from "../../../../services/utils/api/myCompany";
import { IEditCompany } from "../../../../services/utils/api/myCompany/models";
import EditCompanyForm from "./components/EditCompanyForm";

// name: string;
// manager_name: string;
// phone_number: string;
// website: string;
// address: string;
// location: [number, number];
// logo: string | null;
// category: number | null;
// description: string;

// id: number;
// user: number;
// username: string;
// email: string;
// mobile_number: string;
// name: string;
// manager_name: string;
// phone_number: string;
// website: string;
// address: string;
// location: [number, number];
// logo: string | null;
// category: number | null;
// category_title: string;
// description: string;
// status: "s" | "a";

export const Index = () => {
  const { data } = useSWR<ICompanyRes[]>(`${baseCompanyUrl}/my_company/`);
  let editableData = {} as IEditCompany;
  if (data) {
    const {
      name,
      manager_name,
      phone_number,
      website,
      address,
      location,
      logo,
      category,
      description,
    } = data[0];
    editableData = {
      name,
      manager_name,
      phone_number,
      website,
      address,
      location,
      logo,
      category,
      description,
    };
  }

  const handleSubmit = async (values: Partial<IEditCompany>) => {
    return (
      data &&
      (await api.myCompanyApi.editMyCompany({ id: data[0].id, ...values }))
    );
  };
  return (
    <div className="row">
      <div className="card card-body">
        <h4 className="card-title">پروفایل</h4>
        <h5 className="card-subtitle">
          ازین قسمت میتوانید پروفایل خود را مشاهده و درصورت نیاز تغییر دهید
        </h5>
        {!data && <Spinner />}
        {data && (
          <EditCompanyForm
            onSubmit={handleSubmit}
            initialValue={editableData}
          />
        )}
      </div>
    </div>
  );
};
export default Index;
