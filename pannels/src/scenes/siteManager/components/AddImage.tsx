// import React from "react";
// import Img1 from "../../../../../assets/images/add.png";

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import PicCart from "../scenes/CategoryManager/components/CategoryModal/PicCart";
import Button from "../../../components/Button";

interface IProps {
  url: string;
  onSubmit: (image: File) => Promise<any>;
}
interface IFileWithPreview extends File {
  preview: any;
}
const AddImage: React.FC<IProps> = ({ onSubmit, url }) => {
  const [files, setFiles] = useState<File[]>([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const handleRemove = (index: number) => {
    const newFiles = files.filter((item, i) => index !== i);
    setFiles(newFiles);
  };
  const handleSend = async (file: File) => {
    try {
      await onSubmit(file);
    } catch (e) {}
  };

  const thumbs = (files as Array<IFileWithPreview>).map((file, index) => (
    <React.Fragment key={file.size}>
      <PicCart image={file.preview} />
      <Button
        onClick={() => handleSend(file)}
        className="ml-2 "
        type="success"
        text="ارسال"
      />
      <Button onClick={() => handleRemove(index)} type="danger" text="حذف" />
    </React.Fragment>
  ));
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      (files as Array<IFileWithPreview>).forEach((file) =>
        URL.revokeObjectURL(file.preview)
      );
    },
    [files]
  );
  return (
    <div className="col-lg-6">
      <section className="container">
        <div className="row">
          {!!thumbs.length && <div className="col-md-6">{thumbs}</div>}{" "}
          <div className="col-md-6">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>
                تصویر مورد نظر خود را انتخاب کنید یا در این محل بکشید. فرمتهای
                jpeg و png پشتیبانی میشود
              </p>
              <span className="fa fa-plus"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AddImage;
