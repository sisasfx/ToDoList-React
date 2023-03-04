import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"

const ToDoList = ({toDo}) => {
    return(
        <div className="card">
            <h5>{toDo}</h5>
            <FontAwesomeIcon icon={faXmark} />
        </div>        
    );
}
git remote add origin https://github.com/sisasfx/ToDoList-React.git
export default ToDoList;