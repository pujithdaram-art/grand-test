import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  // ADD TASK

  const addTask = () => {

    if(task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);

    setTask("");
  };

  // DELETE TASK

  const deleteTask = (id) => {

    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  // TOGGLE COMPLETE

  const toggleComplete = (id) => {

    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  return (

    <div className="app">

      <div className="todo-container">

        <h1 className="title">
          Todo Application
        </h1>

        {/* FORM */}

        <div className="todo-form">

          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add
          </button>

        </div>

        {/* TODO LIST */}

        <div className="todo-list">

          {
            todos.length === 0 ? (

              <p className="empty-text">
                No tasks added yet
              </p>

            ) : (

              todos.map((todo) => (

                <div
                  key={todo.id}
                  className={`todo-item ${todo.completed ? "completed" : ""}`}
                >

                  <div className="left-section">

                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />

                    <span className="todo-text">
                      {todo.text}
                    </span>

                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(todo.id)}
                  >
                    Delete
                  </button>

                </div>

              ))

            )
          }

        </div>

      </div>

    </div>

  );
}

export default App;