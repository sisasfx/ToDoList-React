import React, {useState} from "react";
import Form from "../component/form.jsx"
import ToDoList from "./toDoList.jsx";
import CheckedList from "./checkedList.jsx";


const Home = () => {

	const [toDo, setToDo] = useState([])

	const [checkedToDo, setCheckedToDo] = useState([])

	const handleToDo = (addToDo) => {
			setToDo([...toDo, addToDo])
	}

	const checkToDo = (index) => {
		const itemChecked = toDo.splice(index, 1)
		console.log(itemChecked)
		console.log(checkedToDo)
		setCheckedToDo([...checkedToDo, itemChecked])
		
	}

	const deleteToDo = (index) => {
		const copiaToDo = [...toDo]
		copiaToDo.splice(index,1)
		console.log(copiaToDo)
		setToDo(copiaToDo)	
	}

	return (
		<div className="container">
			<h1>To Do List</h1>
			<Form handleToDo={handleToDo}/>
			<div className="mainCardContainer">
				<div className="card-container1">
				{
					toDo.length > 0 ? toDo.map((item, key) => <ToDoList toDo={item} id={key} key={key} checkToDo={checkToDo} deleteToDo={deleteToDo}/>) : console.log("NO hay tareas")
				}
				</div>
				<div className="card-container2">
				{
					checkedToDo.length > 0 ? checkedToDo.map((item, key) => <CheckedList className="checked" toDo={item} id={key} key={key}/>) : console.log("NO hay tareas")
				}
				</div>			
			</div>			
		</div>
	);
};

export default Home;
