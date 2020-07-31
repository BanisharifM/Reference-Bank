import React from "react";
interface IProps {
	size? : 'sm' | 'lg' | 'xl' |'xs'
}
const Spinner:React.FC<IProps> = ({size= 'sm'}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={`spinner-border spinner-border-${size}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    // <span
    //   className="spinner-grow text-center spinner-grow-sm"
    //   role="status"
    //   aria-hidden="true"
    // ></span>
  );
};
export default Spinner;
