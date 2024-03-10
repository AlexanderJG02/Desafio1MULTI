import React from "react";
import { data } from "../src/app/data";

export const Principal = () => {
  return (
    <div className="container">
      {data.map((gadgets) => (
        <div className="item" key={gadgets.id}>
          <div className="informacion">
            <h2 className="nombre">{gadgets.nombre}</h2>
            <h4 className="descripcion">Descripcion</h4>
            <p className="descripcion">{gadgets.descripcion}</p>
            <p className="marca">{gadgets.marca}</p>
            <p className="modelo">{gadgets.modelo}</p>
            <p className="precio">{gadgets.precio}</p>
            <h4>Caracteristicas</h4>
            <p className="caracteristicas">{gadgets.caracteristicas}</p>
          </div>
          <div className="imagen">
            <img src={gadgets.imagen} key={gadgets.nombre} />
          </div>
        </div>
      ))}
    </div>
  );
};
