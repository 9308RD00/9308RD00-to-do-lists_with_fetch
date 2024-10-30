import React from "react";
import Home from "./home";

//create your first component
const Todolists = (props) => {
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
              props.setMylist([...props.myList, props.input]);
              props.setInput("");
            }
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.setMylist([...props.myList, props.input]);
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
