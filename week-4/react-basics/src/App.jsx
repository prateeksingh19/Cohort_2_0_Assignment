import { useState } from "react";
import "./App.css";
import ToDo from "./Components/ToDo.jsx";
function App() {
  const [toDo, setToDo] = useState([]);
  const [id, setId] = useState(1);
  const todoElements = toDo.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        description={todo.description}
        done={todo.done}
        markAsDone={markAsDone}
      />
    );
  });
  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const newTodo = {
      id,
      title,
      description,
      done: false,
    };
    setToDo((prevTodo) => [...prevTodo, newTodo]);
    setId((prevId) => prevId + 1);
  }
  function markAsDone(id) {
    setToDo((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  }
  return (
    <>
      <input type="text" id="title" />
      <br />
      <br />
      <input type="text" id="description" />
      <br />
      <br />
      <button onClick={addTodo}>Save ToDo</button>
      <div>{todoElements}</div>
    </>
  );
}

export default App;
