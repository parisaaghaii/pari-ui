import React from "react";
import "./styles/Input.css";

const Input = (props) => {
  return <input className="inpDes" type={props.type} placeholder="Your Text..."></input>;
};
export default Input;
