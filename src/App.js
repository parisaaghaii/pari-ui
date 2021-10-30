import React, { useState } from "react";
import { Button, Input, Select } from "./lib";
import "./App.css";

function App() {
  const [value, setValue] = useState("")
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
          selector={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value={"javad1"}>javad1</option>
          <option value={"javad2"}>javad2</option>
        </Select>
      </fieldset>
    </div>
  );
}
export default App;
