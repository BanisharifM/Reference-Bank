import React from "react";

const CustomeFileInput = () => {
  return (
    <div>
      <div className="form-group">
        <label>Custom File upload</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomeFileInput;
