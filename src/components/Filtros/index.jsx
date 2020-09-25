import React from "react";
import { MdPlaylistAddCheck } from "react-icons/md";

const Filtros = ({ list, setFilter }) => {
    return (
        <div className="filtros">
            <span>{list.length}</span>
            <MdPlaylistAddCheck className="icono-clase" />
            <button
                className="btn-filtros btn-filtros--todas "
                onClick={() => {
                    setFilter(null);
                }}
            >
                Todas
      </button>
            <button
                className="btn-filtros btn-filtros--incompletas"
                onClick={() => setFilter("incompleta")}
            >
                Incompletas
      </button>
            <button
                className="btn-filtros btn-filtros--completas "
                onClick={() => {
                    setFilter("completa");
                }}
            >
                Completas
      </button>
        </div>
    );
};

export default Filtros;