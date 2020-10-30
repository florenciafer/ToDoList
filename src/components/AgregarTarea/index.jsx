import React, { useState } from "react";

import Input from "../Input";
import Lista from "../Lista";
import Filtros from "../Filtros";

const AgregarTarea = () => {
    const [list, setList] = useState([
        { tarea: "comprar lamparita", estado: "completa" },
        { tarea: "comprar cable", estado: "completa" },
    ]);

    const [filter, setFilter] = useState(null);

    const agregar = (tarea) => {
        setList([...list, { tarea, estado: "incompleta" }]);
    };

    const borrar = (item) => {
        const indexItem = list.indexOf(item);
        const clone = [...list];
        clone.splice(indexItem, 1);
        setList(clone);
    };

    const tachar = (item) => {
        const indexItem = list.indexOf(item);
        const clone = [...list];
        const estado = item.estado === "incompleta" ? "completa" : "incompleta";
        clone.splice(indexItem, 1, { ...item, estado });
        setList(clone);
    };
    return (
        <div>
            <Input agregar={agregar}></Input>
            <Lista
                tachar={tachar}
                borrar={borrar}
                list={list}
                filter={filter}
            ></Lista>
            <Filtros list={list} setFilter={setFilter}></Filtros>
        </div>
    );
};

export default AgregarTarea;