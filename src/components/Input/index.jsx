import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

const Input = ({ agregar }) => {
    const [text, setText] = useState("");
    console.log(text);
    const enviarText = (event) => {
        event.preventDefault();
        if (text === "") return
        agregar(text, setText)
        setText("")

    }
    return (
        <div className="input-container">
            <input
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={text}
                className="input"
                placeholder="Ingrese una tarea"
            ></input>
            <button onClick={enviarText} className="btn">
                <IoMdAddCircle className="icono" />
            </button>
        </div>
    );
};

export default Input;