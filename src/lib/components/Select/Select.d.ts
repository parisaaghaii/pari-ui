import * as React from "react";
export interface SelectProps {
  list?: [
    {
    key: string ;
    value: string ;
    }
  ];
  selected?: string;
  placeholder?: string;
  onChange?: Function;
  children?: React.ReactNode;
  classNameSelecttext?: string;
}
declare const Select: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<unknown>
>;
export default Select;
