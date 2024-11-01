import React from "react";
import Home from "./home";

//create your first component
const Todolists = (props) => {
  const postTodo = (taskName) => {
    fetch("https://playground.4geeks.com/todo/todos/redando_d", {
      method: "POST",
      body: JSON.stringify({ label: taskName, is_done: false }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((response) => {
        console.log("Success:", response);
        props.getFetch();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="row  text-center">
      <div className="col todoBox">
        <h1>My Todolist</h1>
        <input
          className="imput"
          placeholder="Add New Todo"
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              postTodo(props.input);
              props.setInput("");
            }
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            postTodo(props.input);
            props.setInput("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Todolists;
