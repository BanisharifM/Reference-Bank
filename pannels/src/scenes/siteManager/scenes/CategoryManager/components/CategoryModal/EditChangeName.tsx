import React from "react";

interface IProps {
  categoryName: string;
  onEditCategoryName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const EditChangeName: React.FC<IProps> = ({
  categoryName,
  onEditCategoryName,
}) => {
  return (
    <div className="form-group">
      <label className="control-label">عنوان دسته بندی</label>
      <input
        type="text"
        id="categoryName"
        className="form-control"
        placeholder="عنوان دسته بندی"
        value={categoryName}
        onChange={onEditCategoryName}
      />
    </div>
  );
};

export default EditChangeName;
