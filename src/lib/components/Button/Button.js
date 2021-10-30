import React from "react";
import "./Button.css";
/**
 * 
 * @param {String} kind [primary | default]
 * @returns 
 */
const Button = (props) => {
  return (
    <button
      className= {`btn btn--${props.kind} CTA`}
      type={props.type}
      name={props.name}
      value={props.value}
      onClick={props.handleClick}
    >
      <h4>{props.label}</h4>
      {props.children}
    </button>
  );
};
export default Button;
