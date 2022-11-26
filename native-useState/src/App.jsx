import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const NameList = () => {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("")

  const addName = () => {
    setList([...list, name])
    setName("")
  }

  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addName}>Add name</button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(10);

  const addOne = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
};

export default App;
