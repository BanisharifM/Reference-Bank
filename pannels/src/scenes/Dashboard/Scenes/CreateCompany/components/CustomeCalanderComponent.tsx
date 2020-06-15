import React, { useState } from "react";
import { Calendar, DayValue, utils } from "react-modern-calendar-datepicker";
import { ICalanderDate } from "../models";
import { FieldAttributes } from "formik";

const today = utils("fa").getToday();
const CustomeCalanderComponent: React.FC<FieldAttributes<any>> = ({
  label,
  field: { name }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const [selectedDay, setSelectedDay] = useState<DayValue>();
  const toShow = `${selectedDay?.year}/${selectedDay?.month}/${selectedDay?.day}`;

  const handleChangeDate = (newDay: DayValue) => {
    const toSave = `${newDay?.year}/${newDay?.month}/${newDay?.day}`;
    setSelectedDay(newDay);
    setFieldValue(name, toSave, true);
    setFieldTouched(name, true, false);
  };
  const isError = touched[name] && errors[name];

  return (
    <div className="form-group">
      <label className="mb-2">{label}</label>{" "}
      {selectedDay && !isError && <span className="text-muted">{toShow}</span>}
      {isError && <span className="text-danger">{errors[name]}</span>}
      <Calendar
        value={selectedDay}
        onChange={handleChangeDate}
        minimumDate={today}
        shouldHighlightWeekends
        locale="fa"
      />
    </div>
  );
};

export default CustomeCalanderComponent;
