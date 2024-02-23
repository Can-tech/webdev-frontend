import { useState } from "react";
import MyForm from "./MyForm";
import MyList from "./assets/MyList";
import { useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const items = localStorage.getItem("todos");
    if (!items) return [];
    return JSON.parse(items);
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <h2>My To Do App</h2>
      <MyForm setTodoList={setTodoList} />
      <MyList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
