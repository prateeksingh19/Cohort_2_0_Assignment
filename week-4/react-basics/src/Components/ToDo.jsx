import React from "react";

export default function ToDo(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <button onClick={() => props.markAsDone(props.id)}>
        {props.done ? "Done" : "Mark As Done"}
      </button>
    </div>
  );
}
