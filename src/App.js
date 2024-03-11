import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>First React test case</p>
      <input
        type="text"
        placeholder="Enter user name"
        name="username"
        id="userid"
      />
      <img title="React Logo" src={logo} alt="Log" />
    </div>
  );
}

export default App;
