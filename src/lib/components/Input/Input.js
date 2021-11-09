import React from "react";
import "./Input.css";



const Input = ({
  type = "text",
  onChange = () => {},
  onKeyDown = () => {},
  placeholder = undefined,
classNameinput = "",
}) => {
  return (
    <input
      className={`inpDes ${classNameinput}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
