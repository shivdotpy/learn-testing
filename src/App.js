import "./App.css";
import { Input, Button } from "./components";
import { StateTesting } from "./components/stateTesting";

function App() {
  return (
    <div className="App">
      <StateTesting />
      <hr />
      <Input />
      <hr />
      <Button />
    </div>
  );
}

export default App;
