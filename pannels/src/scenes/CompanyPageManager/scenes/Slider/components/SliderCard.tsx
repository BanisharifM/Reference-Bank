import React from "react";
import { IMyCompanySliderRes } from "../../../../../services/utils/api/MyCompanySlider/models";
import Card from "../../../../../components/Card/Card";
import Button from "../../../../../components/Button";
import CardText from "../../../../../components/Card/CardText";
import CardBody from "../../../../../components/Card/CardBody";
import CardImg from "../../../../../components/Card/CardImg";

interface IProps {
  onDelete: (id: number) => void;
  onSureDelete: (id: number) => void;
  isSureState: boolean;
  onIgnoreSureDelete:()=>void
}
const SliderCard: React.FC<IMyCompanySliderRes & IProps> = ({
  image,
  id,
  onDelete,
  onSureDelete,
  isSureState,
  onIgnoreSureDelete
}) => {
  return (
    <Card>
      <CardImg src={image} />
      <CardBody>
        {isSureState ? (
          <>
            <CardText>آیامیخواهید تصویر را حذف کنید؟</CardText>
            <Button
              type="success"
              text="بلی"
              className="ml-2"
              onClick={() => onDelete(id)}
            />
            <Button type="danger" text="خیر" onClick={()=>onIgnoreSureDelete()}/>
          </>
        ) : (
          <Button onClick={() => onSureDelete(id)} type="warning" text="حذف" />
        )}
      </CardBody>
    </Card>
  );
};

export default SliderCard;
