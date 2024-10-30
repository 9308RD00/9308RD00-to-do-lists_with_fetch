import React, { useState } from "react";
import Todolists from "./Todolists";
import Task from "./task";
import Login from "./Login";

//create your first component
const Home = (props) => {
  const [myList, setMylist] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUserName] = useState("");
  const [registredUsers, setRegistredUsers] = useState([
    "Redando",
    "Dory",
    "Dieujuste",
  ]);

  return (
    <div className=" main container text-center">
      {username ? (
        <>
          <Todolists
            input={input}
            myList={myList}
            setInput={setInput}
            setMylist={setMylist}
          />

          <ol className="row col text-center task">
            {myList.map((task) => (
              <Task task={task} />
            ))}
          </ol>
        </>
      ) : (
        <Login registered={registredUsers} setUser={setUserName} />
      )}
    </div>
  );
};

export default Home;
