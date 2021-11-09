import * as React from "react";
export interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: Function;
  onKeyDown?: Function;
  classNameinput?: string;
}
declare const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<unknown>
>;
export default Input;
