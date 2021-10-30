import * as React from "react";
export interface InputProps {
  type?: "default" | "string";
  placeholder?: string;
  children?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<unknown>
>;
export default Input;
