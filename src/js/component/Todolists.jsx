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
          onChange={(e) => props.setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter")
              props.setMylist([...props.myList, props.input]);
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.setMylist([...props.myList, props.input]);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Todolists;
