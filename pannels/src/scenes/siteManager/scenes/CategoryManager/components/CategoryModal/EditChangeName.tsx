import React from "react";

interface IProps {
  label:string
  categoryName: string;
  onEditCategoryName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const EditChangeName: React.FC<IProps> = ({
  label,
  categoryName,
  onEditCategoryName,
}) => {
  return (
    <div className="form-group">
      <label className="control-label">{label }</label>
      <input
        type="text"
        id="categoryName"
        className="form-control"
        placeholder={label}
        value={categoryName}
        onChange={onEditCategoryName}
      />
    </div>
  );
};

export default EditChangeName;
