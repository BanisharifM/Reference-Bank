import React, { useState } from "react";
import useSWR from "swr";
import Button from "../../../../../components/Button";
import api from "../../../../../services/utils/api";
import { baseMyCompanySlideUrl } from "../../../../../services/utils/api/MyCompanySlider";
import { IMyCompanySliderRes } from "../../../../../services/utils/api/MyCompanySlider/models";
import AddImage from "../../../../siteManager/components/AddImage";
import Card from "../../../../../components/Card/Card";
import SliderLoaders from "./SliderLoaders";
import SliderCard from "./SliderCard";

const Main = () => {
  const { data, mutate } = useSWR<IMyCompanySliderRes[]>(
    `${baseMyCompanySlideUrl}/`
  );

  const [sureDelete, setSureDelete] = useState(false);
  const [wantDeletedItemId, setWantDeletedItemId] = useState(-1);
  const handleSureDelete = (id: number) => {
    setSureDelete(true);
    setWantDeletedItemId(id);
  };
  const handleDelete = async (id: number) => {
    try {
      mutate(
        data?.filter((item) => item.id !== id),
        false
      );
      await api.myCompanySliderApi.deleteMyCompanySlider(id);
      mutate();
    } catch (err) {}
  };
  const handleIgnoreSureDelete = () => {
    setSureDelete(false);
    setWantDeletedItemId(-1);
  };

  return (
    <>
      {!data && <SliderLoaders />}
      {/* <SliderLoaders /> */}
      {data && (
        <>
          {data.map((item) => (
            <div className="col-lg-3 col-md-6">
              <SliderCard
                {...item}
                isSureState={item.id === wantDeletedItemId && sureDelete}
                onDelete={handleDelete}
                onSureDelete={handleSureDelete}
                onIgnoreSureDelete={handleIgnoreSureDelete}
              />
            </div>
          ))}
          <AddImage url="/" onSubmit={() => new Promise((res) => res)} />
        </>
      )}
    </>
  );
};
export default Main;
