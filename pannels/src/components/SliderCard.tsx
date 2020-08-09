import React, { useState } from "react";
import { IMyCompanySliderRes } from "../services/utils/api/MyCompanySlider/models";
import Card from "./Card/Card";
import Button from "./Button";
import CardText from "./Card/CardText";
import CardBody from "./Card/CardBody";
import CardImg from "./Card/CardImg";

interface IProps {
  id: number;
  image: string;
  onDelete: (id: number) => void;
  onSureDelete?: (id: number) => void;
  isSureState?: boolean;
  onIgnoreSureDelete?: () => void;
}
const SliderCard: React.FC<IProps> = ({
  image,
  id,
  onDelete,
  onSureDelete,
  isSureState,
  onIgnoreSureDelete,
}) => {
  const [isSure, setIsSure] = useState(false);
  const handleToggleSure = () => setIsSure(!isSure);
  return (
    <Card>
      <CardImg src={image} />
      <CardBody>
        {isSure ? (
          <>
            <CardText>آیامیخواهید تصویر را حذف کنید؟</CardText>
            <Button
              type="success"
              text="بلی"
              className="ml-2"
              onClick={() => onDelete(id)}
            />
            <Button type="danger" text="خیر" onClick={handleToggleSure} />
          </>
        ) : (
          <Button onClick={handleToggleSure} type="danger" text="حذف" />
        )}
      </CardBody>
    </Card>
  );
};

export default SliderCard;
