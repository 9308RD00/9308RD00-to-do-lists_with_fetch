import React, { useState } from "react";
import Todolists from "./Todolists";
import Task from "./task";


//create your first component
const Home = (props) => {
	const [myList, setMylist] = useState([]);
    const [input, setInput] = useState("")

	return (
		<div className=" main container text-center">

			<Todolists input={input} myList={myList} setInput={setInput} setMylist={setMylist} />
			<ol className="row col text-center task">
			{myList.map((task)=>(<Task task={task}/>))}
			</ol>
		</div>
	);
};

export default Home;
