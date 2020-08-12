import React from "react";
import useSWR from "swr";
import SliderLoaders from "../../../../../components/SliderLoaders";
import AddImage from "../../../../../components/AddImage";
import SliderCard from "../../../../../components/SliderCard";
import { baseAdminUrl } from "../../../../../services/utils/api/Admin";
import { ICategorySlider } from "../../../../../services/utils/api/Admin/models";

export const Main = () => {
  const { data } = useSWR<ICategorySlider[]>(`${baseAdminUrl}/category_slider/`);
  const handleDeleteItem = async(id: number) => {



  };
  const handleSendSubmit = () => {
    return new Promise((res) => res());
  };

  return (
    <>
      {!data && <SliderLoaders />}
      {data && (
        <>
          {data.map((item, index) => (
            <div className="col-lg-3 col-md-6">
              <SliderCard
                id={item.id}
                image={item.image}
                key={item.id}
                onDelete={handleDeleteItem}
              />
            </div>
          ))}
          <AddImage url="/" onSubmit={handleSendSubmit} />
        </>
      )}
    </>
  );
};
export default Main;
