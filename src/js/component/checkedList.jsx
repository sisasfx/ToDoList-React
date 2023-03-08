import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons"

const CheckedList = (props) => {
    
    return(
        <div className="card">
            <h5 className={props.toDo}>{props.toDo}</h5>
            <FontAwesomeIcon className="checked" icon={faSquareCheck} id="check"/>
        </div>
    )
}

export default CheckedList;
