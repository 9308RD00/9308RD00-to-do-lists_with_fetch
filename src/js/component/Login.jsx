import React, { useState } from "react";

//create your first component
const Login = (props) => {
  const [userInput, setUserInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const handleLogin = () => {
    let result = props.registered.find((user) => user == userInput);
    if (result) props.setUser(result);
    else if (result == undefined || result == "undefined") {
      alert("This user does not exist");
    }
  };

  return (
    <div>
      <input
        placeholder="UserName"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <input
        placeholder="Password"
        onChange={(e) => setPwInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
