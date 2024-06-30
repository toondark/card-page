import React from "react";
import "../hojas-estilo/Testimonio.css";
function Testimonio(props){
  return(
    <a href={props.link} target="_blank">
      <div className="contenedor-testimonio">
        <img 
        className="imagen-testimonio"
        src={require(`../imagenes/n-${props.imagen}.png`)}
        alt="Foto uno"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">Number <strong>{props.numero}</strong></p>
          <p className="cargo-testimonio"><strong>{props.cargo} for the KND squad {props.escuadron}</strong> </p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    </a>
  );    
}

export default Testimonio;

