import React from "react";
import useSWR from "swr";
import SliderLoaders from "../../../../../components/SliderLoaders";
import AddImage from "../../../../../components/AddImage";
import SliderCard from "../../../../../components/SliderCard";
export const Main = () => {
  const { data } = useSWR<{id :number ,image: string}[]>("");
  const handleDeleteItem = (id: number) => {};
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
