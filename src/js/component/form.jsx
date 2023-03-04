import React, { useState } from "react";


const Form = ({handleToDo}) => {

    const [state, setState] = useState("")

    const recordingToDo = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }

    const addToDo = (e) => {
        e.keyCode === 13 ? handleToDo(state) : console.log("NOOOO")
        setState("")
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
        onChange={recordingToDo}
        onKeyDown={addToDo}
      ></input>
    </div>
  );
};

export default Form;
