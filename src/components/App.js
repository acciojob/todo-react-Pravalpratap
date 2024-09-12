import "./../styles/App.css";

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handletask = () => {
    if (value.trim()) {
      setTodos([...todos, value]);
      setValue("");
    }
  };
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove task by index
    setTodos(newTodos);
  };

  return (
    <>
      <div className="main">
        <h3>Todo app</h3>
        <input
          type="text"
          placeholder="Enter a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handletask}>Add Task</button>
      </div>
      <div className="todo">
        <ul>
          {Array.isArray(todos) &&
            todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDelete(index)} className="btn">
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
