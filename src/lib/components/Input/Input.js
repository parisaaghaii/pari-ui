import React from "react";
import "./Input.css";



const Input = ({
  type = "text",
  onChange = () => {},
  onKeyDown = () => {},
  placeholder=undefined}) => {
  return (
    <input
      className="inpDes"
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
