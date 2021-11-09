import React from "react";
import "./Button.css";
/**
 * 
 * @param {String} kind [primary | default]
 * @returns 
 */
const Button = (props , classNameButton="",) => {
  return (
    <button
      className={`btn btn--${props.kind} ${classNameButton} CTA`}
      type={props.type}
      onClick={props.handleClick}
    >
      <h4>{props.label}</h4>
      {props.children}
    </button>
  );
};
export default Button;
