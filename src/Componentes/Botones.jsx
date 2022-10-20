import React from "react";
import { Button } from "react-bootstrap";

const Botones = () => {
    
  return (
    <div className="container text-center">
      <Button style={{width:'49%'}} variant="success">Agregar Tarea</Button>{" "}
      <Button  style={{width:'50%'}} variant="danger">Borrar contenido</Button>{" "}
    </div>
  );
};

export default Botones;
