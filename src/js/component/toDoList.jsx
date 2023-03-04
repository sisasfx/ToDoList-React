import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"

const ToDoList = (props) => {

    const deleteItem = () => {
        console.log("DELETE ITEM")
        props.deleteToDo(props.toDo)
    }

    return(
        <div className="card">
            <h5 className={props.toDo}>{props.toDo}</h5>
            <FontAwesomeIcon icon={faXmark} id="icon" onClick={deleteItem}/>
        </div>        
    );
}
export default ToDoList;