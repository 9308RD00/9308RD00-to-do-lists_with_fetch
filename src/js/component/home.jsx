import React, { useEffect, useState } from "react";
import Todolists from "./Todolists";
import Task from "./task";
import Login from "./Login";

//create your first component
const Home = (props) => {
  const [myList, setMylist] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUserName] = useState("Redando");
  const [registredUsers, setRegistredUsers] = useState([
    "Redando",
    "Dory",
    "Dieujuste",
  ]);

  const getFetch = () => {
    fetch("https://playground.4geeks.com/todo/users/redando_d")
      .then((response) => response.json())
      .then((jsonifiedData) => setMylist(jsonifiedData.todos))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className=" main container text-center">
      {username ? (
        <>
          <Todolists
            input={input}
            myList={myList}
            setInput={setInput}
            setMylist={setMylist}
            getFetch={getFetch}
          />

          <ol className="row col task">
            {myList &&
              myList.length != undefined &&
              myList.map((task) => <Task task={task} newlist={myList} getFetch={getFetch} />)}
          </ol>
        </>
      ) : (
        <Login registered={registredUsers} setUser={setUserName} />
      )}
    </div>
  );
};

export default Home;
