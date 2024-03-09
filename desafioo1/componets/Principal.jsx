import React from "react";

import {data} from "../src/app/data";

export const Principal=()=>{
    return(
        <div clasName="container">
            {data.map(gadgets =>(
                <div clasName="item" key={gadgets.id} >
                
                    <div className="informacion" >
                        <h2 className="nombre" >{gadgets.nombre}</h2>
                        <img src={gadgets.imagen} key={gadgets.nombre}/>
                        <h3>Descripcion</h3>
                        <p className="descripcion" >{gadgets.descripcion}</p>
                        <p className="marca" >{gadgets.marca} </p>
                        <p className="modelo" >{gadgets.modelo}</p>
                        <p className="precio">{gadgets.precio}</p>
                        
                        <p>Caracteristicas</p>
                        <p className="caracteristicas" >{gadgets.caracteristicas}</p>
                        <hr></hr>
                        </div>
                        </div>
                                    ))}
        </div>
    );
            }