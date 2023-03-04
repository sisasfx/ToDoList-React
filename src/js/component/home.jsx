import React, {useState} from "react";
import Form from "../component/form.jsx"
import ToDoList from "./toDoList.jsx";

//create your first component
const Home = () => {

	const [toDo, setToDo] = useState([])

	const handleToDo = (addToDo) => {
			setToDo([...toDo, addToDo])
	}

	return (
		<div className="container">
			<Form handleToDo={handleToDo}/>
			{
				toDo.map(item => <ToDoList toDo={item}/>)
			}
		</div>
	);
};

export default Home;
