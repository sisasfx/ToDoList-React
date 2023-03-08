import React, { useState } from "react";


const Form = ({handleToDo}) => {

    const [state, setState] = useState("")

    const recordingToDo = (e) => {
        //console.log(e.target.value)
        setState(e.target.value)
    }

    const addToDo = (e) => {
      if(e.keyCode === 13  && state.length > 2){
        handleToDo(state)
        setState("")
        console.log("Debajo state")
      }      
    }

  return (
    <div className="form">
      <label className="form-label" htmlFor="toDo">
        ¿What do you want to do?
      </label>
      <input
        className="form-control"
        type="text"
        id="toDo"
        placeholder="...write your to do"
        value={state}
        onChange={recordingToDo}
        onKeyDown={addToDo}
      ></input>
    </div>
  );
};

export default Form;
