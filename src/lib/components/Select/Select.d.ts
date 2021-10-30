import * as React from "react";
export interface SelectProps {
  list?: "default" | "string";
  placeholder?: string;
  children?: React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<unknown>
>;
export default Select;
