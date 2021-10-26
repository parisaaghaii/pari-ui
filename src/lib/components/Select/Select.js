import React from "react";
import { useState } from "react";
import "./Select.css";

function Select() {
  const [myCar, setMyCar] = useState("Select Your Car:");

  const cars = (event) => {
    setMyCar(event.target.value);
  };
  return (
    <form className="formDes">
      <select className="selDesign" value={myCar} onChange={cars}>
        <option value="select Your Car:">Select Your Car:</option>
        <option value="peykan">peykan</option>
        <option value="peraid">perid</option>
        <option value="206">206</option>
        <option value="pershia">pershia</option>
      </select>
    </form>
  );
}
export default Select;
