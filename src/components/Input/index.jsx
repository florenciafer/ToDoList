import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

const Input = ({ agregar }) => {
    const [text, setText] = useState("");
    return (
        <div className="input-container">
            <input
                onChange={(event) => setText(event.target.value)}
                value={text}
                className="input"
                placeholder="Ingrese una tarea"
            ></input>
            <button onClick={() => agregar(text, setText)} className="btn">
                <IoMdAddCircle className="icono" />
            </button>
        </div>
    );
};

export default Input;