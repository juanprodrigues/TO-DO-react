import React from "react";
import { Button } from "react-bootstrap";

const Boton = (props) => {
  return (
    <>
      <Button
        onClick={props.handleAddTarea}
        style={{ width: "49%" }}
        variant={props.colorFondo}
      >
        {props.nombre}
      </Button>
    </>
  );
};

export default Boton;
