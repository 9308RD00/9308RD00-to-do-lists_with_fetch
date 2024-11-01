import React from "react";

//create your first component
const Task = (props) => {
  const handleDelete = (id) => {
    fetch("https://playground.4geeks.com/todo/todos/" + id, {
      method: "DELETE",
    }).then((response) => props.getFetch());
  };

  const handleComplete = (task) => {
    fetch("https://playground.4geeks.com/todo/todos/" + task.id, {
      method: "PUT",
      body: JSON.stringify({ label: task.label, is_done: true }),
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

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <li>
      {props.task.label} {props.newList}
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  ggvghcghchchchchch
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(props.task.id)}
                  class="btn btn-primary"
                >
                  Confirm delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-outline-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Remove
        </button>
        <button
          onClick={() => handleComplete(props.task)}
          type="button"
          className="btn btn-outline-success"
        >
          {props.task.is_done == false
            ? "Imcomplete"
            : "Completed" + " " + formattedDate}
        </button>
      </div>
    </li>
  );
};

export default Task;
