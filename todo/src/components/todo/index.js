import React from "react";
import TodoItem from "./todoItem";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "sleep" },
    { id: 2, name: "code" },
  ]);

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.task.value) {
      const todo = {
        id: todos.length + 1,
        name: task.value,
      };
      setTodos({ todos: [...todos, todo] });
      e.target.task.value = "";
    }
  };

  handleDelete = (e) => {
    setTodos({ todos: todos.filter((todo) => todo.id !== id) });
  };

  return (
    <div>
      <form>
        <input type="text" name="task" />
        <button onClick={handleSubmit}>Add task</button>
        {/* <button onClick={handleDelete}>Delete</button> */}
      </form>
      <h1>To-Do List </h1>
      <ul>
        <TodoItem
          todo={todo}
          key={i}
          handleDelete={handleDelete}
          
        />
      </ul>
    </div>
  );
};
