import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../../Contexto/AppContexto";
import TablaTarea from "../../Componentes/componentesInicialesQueNoSeUsaron/TablaTarea";

const Botones = () => {
  let [cargarTarea, setcargarTarea] = useState([]);
  const ctx = useContext(AppContext);
  // const handleInput = ({ target }) => {
  //   setcargarTarea = "hola";
  //   setcargarTarea = [ctx.setappTheme, ctx.setappTheme1];
  //   // const [cargarTarea, setcargarTarea] = useState("")
  // };
  useEffect(() => {
    setTarea();
  },[]);

  let mostrar=[
    { key: "1", nombre: "nombre", descr: "desd", estado: "ok" },
    { key: "2", nombre: "nombre 2", descr: "desd 2", estado: "ok 2" }
  ];
  function setTarea() {
    setcargarTarea([ctx.appTheme, ctx.appTheme1]);
    console.log(cargarTarea[1]);
    const tareaSumar = {
      key: "2",
      nombre: cargarTarea[0],
      descr: cargarTarea[1],
      estado: "ok 2",
    };
    mostrar.push(tareaSumar);
    console.log(tareaSumar);
    // setmostrar([tareaSumar]);
    console.log("tarea sumada");
  };
  const handleInput = ({ target }) => {
}


  return (
    <>
      <div className="container text-center">
        <Button
          // onClick={handleInput}
          onClick={() => {
            // setcargarTarea([ctx.appTheme, ctx.appTheme1]);
            // setcargarTarea([]);
                setTarea()
          }}
          // onClick={setTarea()}
          style={{ width: "49%" }}
          variant="success"
        >
          Agregar Tarea
        </Button>{" "}
        <Button style={{ width: "50%" }} variant="danger">
          Borrar contenido
        </Button>{" "}
      </div>
      <TablaTarea tareaMostrar={mostrar} />
    </>
  );
};

export default Botones;
