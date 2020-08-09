import React, { useState } from "react";
import AddImage from "../../../../../../components/AddImage";
import { ISliderImage } from "../Table/model";
import { ICategorySlider } from "../../../../../../services/utils/api/Admin/models";
import api from "../../../../../../services/utils/api";
import useSWR, { mutate } from "swr";
import { baseAdminUrl } from "../../../../../../services/utils/api/Admin";
import { fetcherWithParam } from "../../../../../../services/axios/fetchers";
import { useCategoyId } from "../../../../../../services/contexts/CategoryIdContext/context";
import SliderCard from "../../../../../../components/SliderCard";
const EditCategorySlider: React.FC = () => {
  const categoryId = useCategoyId();
  const { data, mutate } = useSWR<ICategorySlider[]>(
    [`${baseAdminUrl}/category_slider/`, "category", categoryId], // here we wanna mutate and trigger the swr with key /category_slider/companyId
    fetcherWithParam
  );

  const handleDeleteItem = async (id: number) => {
    mutate(
      data!.filter((item) => item.id !== id),
      false
    );
    const res = await api.adminApi.deleteCategorySlider(id);
    mutate();
    return res;

    // const newItems = items.filter((item) => item.id !== id);
    // setItems(newItems);
  };
  const handleSubmitImage = async (image: File) => {
    await api.adminApi.addCategorySlider({ category: categoryId, image });
    mutate();
  };

  return (
    <div className="tab-pane active">
      <div className="p-20 container">
        <div className="row el-element-overlay">
          {data &&
            data.map((item) => (
              <div className="col-lg-4 col-md-6">
                <SliderCard
                  key={item.id}
                  image={item.image}
                  id={item.id}
                  onDelete={handleDeleteItem}
                />
              </div>
            ))}
          <AddImage url="/" onSubmit={handleSubmitImage} />
        </div>
      </div>
    </div>
  );
};

export default EditCategorySlider;
