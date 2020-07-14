// import React from "react";
// import Img1 from "../../../../../assets/images/add.png";

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import PicCart from "../scenes/CategoryManager/components/CategoryModal/PicCart";

interface IProps {
  url: string;
}
interface IFileWithPreview extends File {
  preview: any;
}
const AddImage: React.FC<IProps> = ({ url }) => {
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

  const thumbs = (acceptedFiles as Array<IFileWithPreview>).map((file) => (
    <PicCart image={file.preview} key={file.size} />
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

// const AddImage = () => {
//   return (
// <div className="col-lg-3 col-md-6">
//   <div className="card">
//     <div className="el-card-item">
//       <div className="el-card-avatar el-overlay-1">
//         <img src={Img1} alt="user" />
//         <div className="el-overlay">
//           <ul className="el-info">
//             <li>
//               <a
//                 className="btn default btn-outline image-popup-vertical-fit"
//                 href="../assets/images/users/1.jpg"
//               >
//                 <i className="icon-magnifier"></i>
//               </a>
//             </li>
//             <li>
//               <a className="btn default btn-outline" href="">
//                 <i className="icon-link"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>
// <div className="col-lg-3 col-md-6">
//   <div className="dropify-wrapper">
//     <div className="dropify-message">
//       <span className="file-icon"></span> <p>تصویر جدید را انتخاب کنید</p>
//       <p className="dropify-error">خطایی رخ داده است</p>
//     </div>
//     <div className="dropify-loader"></div>
//     <div className="dropify-errors-container">
//       <ul></ul>
//     </div>
//     <input type="file" id="input-file-now" className="dropify" />
//     <button type="button" className="dropify-clear">
//       حذف
//     </button>
//     <div className="dropify-preview">
//       <span className="dropify-render"></span>
//       <div className="dropify-infos">
//         <div className="dropify-infos-inner">
//           <p className="dropify-filename">
//             <span className="file-icon"></span>{" "}
//             <span className="dropify-filename-inner"></span>
//           </p>
//           <p className="dropify-infos-message">برای جایگزینی کلیک کنید</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default AddImage;
