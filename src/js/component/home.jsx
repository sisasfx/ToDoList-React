import React, {useState} from "react";
import Form from "../component/form.jsx"
import ToDoList from "./toDoList.jsx";

//create your first component
const Home = () => {

	

	const [toDo, setToDo] = useState([])

	const handleToDo = (addToDo) => {
			setToDo([...toDo, addToDo])
	}

	const deleteToDo = (itemList) => {
		console.log(itemList)
		for(let i = 0; i < toDo.length; i++){
			itemList === toDo[i] ? toDo.splice(0,i) : null
		}
		console.log(toDo)
	}

	return (
		<div className="container">
			<Form handleToDo={handleToDo}/>
			{
				toDo.map(item => <ToDoList toDo={item} deleteToDo={deleteToDo}/>)
			}
		</div>
	);
};

export default Home;
