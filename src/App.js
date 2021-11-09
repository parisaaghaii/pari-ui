import React, { useState } from "react";
import { Button, Input, Select } from "./lib";
import "./App.css";
// import AnalogClock from "analog-clock-react";
import Clock from './lib/components/clock'

function App(buttonclassName = "" , inputclassName= "" , ) {
  const [value, setValue] = useState("");
  
  // const desclock = {
  //   width: "150px",
  //   border: true,
  //   // borderColor: "#ececec",
  //   borderColor: "14px solid #333",

  //   margin: "8% auto 0",
  //   // border: "14px solid #333",

  //   centerColor: "#459cff",
  //   centerBorderColor: "#ffffff",
  //   handColors: {
  //     second: "#d81c7a",
  //     minute: "#ffffff",
  //     hour: "#ffffff",
  //   },
    // baseColor: {
    //   // "#7bdcb5",
    //   width: "14px",
    //   height: "14px",
    //   borderradius: "50%",
    //   background: "#ccc",
    //   top: "0",
    //   left: "0",
    //   right: "0",
    //   bottom: "0",
    //   margin: "auto",
    //   position: "absolute",
    //   zindex: "10",
    //   boxshadow: "0 2px 4px -1px black",
    // },
  // };
  return (
    <div className="page">
      <fieldset>
        <legend>Button</legend>
        <Button label="RUN" kind="primary"></Button>

        <Button>Test</Button>
      </fieldset>

      <fieldset>
        <legend>Input</legend>
        <Input
          type="string"
          placeholder={"Type "}
          onChange={(e) => console.log(e.target.value)}
        >
          dfsdfsdf
        </Input>
      </fieldset>

      <fieldset>
        <legend>Select</legend>
        <Select
          list={["sara", "fateme"]}
          placeholder="names list :"
          selected={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value={"javad1"}>javad1</option>
          <option value={"javad2"}>javad2</option>
        </Select>
      </fieldset>
      <div>
        {/* <AnalogClock {...desclock} /> */}
<Clock />
      </div>

    </div>
  );
}
export default App;
