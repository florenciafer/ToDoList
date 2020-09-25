import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";

const Lista = ({ tachar, borrar, list, filter }) => {
    return (
        <ul>
            {list
                .filter((item) => {
                    if (filter === null) return true;

                    return item.estado === filter;
                })
                .map((item, indice) => (
                    <li className="tareas" key={indice}>
                        <input
                            type="radio"
                            className="checkbox"
                            checked={item.estado == "completa"}
                            onClick={() => {
                                tachar(item);
                            }}
                        ></input>
                        <p
                            style={
                                item.estado === "completa"
                                    ? { textDecoration: "line-through" }
                                    : null
                            }
                        >
                            {item.tarea}
                        </p>
                        <button onClick={() => borrar(item)} className="btn-trashcan">
                            <IoMdTrash className="trashcan" />
                        </button>
                    </li>
                ))}
        </ul>
    );
};

export default Lista;