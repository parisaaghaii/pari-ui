import * as React from "react";
export interface ButtonProps {
  type?: "default" | "primary";
  label?: string;
  children?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<unknown>
>;
export default Button;
