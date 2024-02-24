## To-Do App

A user can add new to-do or delete it.

- Vite: npm create vite@latest, React-Javascript

## Learned:

- setState((prev)=>{}) can take a callback functon in it and we can use it to access the previous state.
- we can use localStorge inside the useEffect and useState:

```
  const [todoList, setTodoList] = useState(() => {
    const items = localStorage.getItem("todos");
    if (!items) return [];
    return JSON.parse(items);
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
```
![todo_proj1](https://github.com/Can-tech/webdev-frontend/assets/61757250/62adbe16-4f65-4fa9-aa97-f4b0b74a3dac)
