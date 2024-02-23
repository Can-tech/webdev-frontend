import { useState } from "react";

export default function MyForm(props) {
  const [todoText, setTodoText] = useState("");

  function handleSubmit() {
    props.setTodoList((current) => [
      ...current,
      { id: crypto.randomUUID(), text: todoText, isCompleted: false },
    ]);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Add To-Do"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Create</button>
      <hr />
    </>
  );
}
