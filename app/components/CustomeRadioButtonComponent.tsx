import React from "react";

interface IProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent) => void;
}
const CustomeRadioButtonComponent: React.FC<IProps> = ({
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          //   className="form-check-input"
          type="radio"
          name="payment_option"
          id={label}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label
          style={{ margin: 0 , marginRight:'5px' }}
          //  className="form-check-label"
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default CustomeRadioButtonComponent;
