import "./App.css";
import { InputNewTask } from "./components/InputNewTask";
import Header from "./components/Header";
import { ContainerCards } from "./components/ContainerCards";
import { useState } from "react";
import { Filters } from "./components/Filters";

function App() {

  const [toDo, setToDo] = useState(
    JSON.parse(localStorage.getItem(["tasks"])) || []
  );

  return (
    <>
      <Header />
      <InputNewTask toDo={toDo} setToDo={setToDo} />
      <Filters toDo={toDo} setToDo={setToDo} />
      <ContainerCards toDo={toDo} setToDo={setToDo} />
    </>
  );
}

export default App;
