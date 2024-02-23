export default function MyList(props) {
  return (
    <>
      <ul>
        {props.todoList.map((e) => (
          <li
            key={e.id}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{e.text}</p>
            <button
              onClick={() =>
                props.setTodoList((prev) => prev.filter((i) => i.id != e.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
