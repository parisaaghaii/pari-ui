import React from "react";
import { useState } from "react";
import "./Select.css";

function Select({ list = [], placeholder = "", selected = "", onChange=()=>{}, children=undefined }) {
  const [myCar, setMyCar] = useState("Select Your Car:");

  const cars = (event) => {
    setMyCar(event.target.value);
  };
  return (
    <form className="formDes">
      <select
        className="selDesign"
        value={selected}
        onChange={onChange}
      >
        {!selected && (
          <option key={"namelist"} value={""}>
            {placeholder}
          </option>
        )}
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
        {children}
      </select>
    </form>
  );
}
export default Select;
