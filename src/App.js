import { Button, Input, Select } from "./lib";
import "./App.css";

function App() {
  return (
    <div className="page">
      <fieldset>
        <legend>Button</legend>
        <Button label="123654" kind="primary">
          456465
        </Button>

        <Button>Test</Button>
      </fieldset>

      <fieldset>
        <legend>Input</legend>
        <Input
          type="number"
          placeholder={"1213132"}
          onChange={(e) => console.log(e.target.value)}
        >
          dfsdfsdf
        </Input>
      </fieldset>

      <fieldset>
        <legend>Select</legend>
        <Select />
      </fieldset>
    </div>
  );
}
export default App;
