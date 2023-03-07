import React, {useState, useEffect} from "react";
import Form from "../component/form.jsx"
import ToDoList from "./toDoList.jsx";

//create your first component
const Home = () => {

	const [toDo, setToDo] = useState([])
	const [isChangeList, setIsChangeList] = useState(true)

	useEffect(() => {
		console.log("DESDE USEEFFECT")
		
	},[toDo])	

	const handleToDo = (addToDo) => {
			setToDo([...toDo, addToDo])
	}

	const deleteToDo = (itemList) => {
		for(let i = 0; i < toDo.length; i++){
			if(toDo[i] === itemList){
				toDo.splice(i,1)
				setToDo(toDo)
				console.log(toDo)
				setIsChangeList(!isChangeList)
			}			
		}
	}

	return (
		<div className="container">
			<Form handleToDo={handleToDo}/>
			{
				isChangeList ? toDo.map(item => <ToDoList toDo={item} deleteToDo={deleteToDo}/>) : toDo.map(item => <ToDoList toDo={item} deleteToDo={deleteToDo}/>)
			}
		</div>
	);
};

export default Home;
