import { Button , Input , Select } from "./lib";
import "./App.css";

function App() {
  return (
    <div className="page">
      <h3 className="textDes">This is my new project</h3>
      <Button label="test" kind="primary" />
      <Input type="text" />
      <Select />
    </div>
  );
}
export default App;
