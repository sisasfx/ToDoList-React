import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark, faSquareCheck} from "@fortawesome/free-solid-svg-icons"

const ToDoList = (props) => { 

    return(
        <div className="card">
            <h5 className={props.toDo}>{props.toDo}</h5>
            <FontAwesomeIcon className="icon" icon={faXmark} id="icon" onClick={() => props.deleteToDo(props.id)}/>
            <FontAwesomeIcon className="noChecked" icon={faSquareCheck} id="check" onClick={() => props.checkToDo(props.id)}/>
        </div>        
    );
}
export default ToDoList;