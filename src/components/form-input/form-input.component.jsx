import React from "react";
import "./form-input.styles.scss";

const makeDropdownReady = (dropdown, handleChange, value, otherProps) => {
  return (
    <div>
      <select
        className="form-input"
        defaultValue="none"
        onChange={handleChange}
        {...otherProps}
      >
        {dropdown.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};
const FormInput = ({ handleChange, label, dropdown, value, ...otherProps }) => (
  <div className="group">
    {dropdown ? (
      makeDropdownReady(dropdown, handleChange, value, otherProps)
    ) : (
      <input className="form-input" onChange={handleChange} {...otherProps} />
    )}
    {label ? (
      <label
        className={`${
          value.length || dropdown ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
