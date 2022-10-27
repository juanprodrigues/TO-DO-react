import React, { useReducer, useState } from "react";
import imagenX from "../imagenes/iconX.jpg";
import Alerta from "./Alerta";
import { Constantes } from "../../src/Componentes/Constantes";
import Boton from "./Boton";
import Tabla from "./Tabla";
import Footer from "./Footer";
import Input from "./Input";
import Titulo from "./Titulo";

function init(initialState) {
  return {
    count: 0,
    countInterval: 0,
    increment: true,
    tareaInput: "",
    descripcionInput: "",
    listaTareas: [],
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "CHECK_TAREA":
      //buscar el se esta modificando y aplicarle los cambios
      const resultado = state.listaTareas.find((e) => e.id == action.id);
      resultado.terminado = action.increment;
      if (action.increment) {
        resultado.estado = "Completado";
      } else {
        resultado.estado = "Pendiente";
      }

      return {
        ...state,
        increment: action.increment,
      };

    case "ADD_TAREA":
      //crear logica para poder añadir un objeto al la lista
      state.countInterval = state.countInterval + 1;
      let sumarTarea = {
        terminado: false,
        id: state.countInterval,
        nom: action.tareaInput,
        des: action.descripcionInput,
        estado: "Pendiente",
      };
      state.listaTareas.push(sumarTarea);
      return {
        ...state,
        listaTareas: state.listaTareas,
      };

    case "DELETE":
      // si el ultimo esta completado, se puede limilar uno que no esta completado antes de ese
      const resultadoAlt = state.listaTareas.find((e) => e.id == action.alt);
      if (resultadoAlt.terminado) {
        state.listaTareas = state.listaTareas.filter((e) => e.id != action.alt);
        return {
          ...state,
          listaTareas: state.listaTareas,
        };

        // state.listaTareas = state.listaTareas.filter(item => e.id != action.alt)
      }
      return state;

    case "RESTART":
      let bandera = false;
      for (let index = 0; index < state.listaTareas.length; index++) {
        if (!state.listaTareas[index].terminado) {
          bandera = true;
        }
      }
      if (bandera) {
        return state;
      }
      //   state.listaTareas.length = 0;
      return init(action.payload);

    default:
      //Lanzar un error
      return state;
  }
};
// ----------------------------------------------------------------------
const TODO = ({ initialState }) => {
  const [error, setError] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState("");
  const [descripcion, setdescripcion] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState, init);
  const handleAddTarea = (e) => {
    if (title && descripcion) {
      if (state.increment) {
        dispatch({
          type: "ADD_TAREA",
          tareaInput: title,
          descripcionInput: descripcion,
        });
      }
      setTitle("");
      setdescripcion("");
    } else {
      setModalShow(true);

      if (title === "" && descripcion === "") {
        setError(Constantes.ERROR_CAMPOS_VACIOS);
      } else if (descripcion === "") {
        setError(Constantes.ERROR_CAMPO_VACIO_DESCRIPCION);
      } else if (title === "") {
        setError(Constantes.ERROR_CAMPO_VACIO_TAREA);
      }
    }
  };
  const handleRestart = (e) => {
    dispatch({ type: "RESTART", payload: initialState });
    // const resultadoAlt = state.listaTareas.find((e) => e.id == alt);
    if (state.listaTareas.length == 0) {
      setModalShow(true);
      setError(Constantes.ERROR_BORRAR_CONTENIDO);
    } else {
      let bandera = false;
      // const resultadoAlt = state.listaTareas.find((e) => e.id == alt);
      for (let index = 0; index < state.listaTareas.length; index++) {
        if (!state.listaTareas[index].terminado) {
          bandera = true;
        }
      }
      if (bandera) {
        setModalShow(true);
        setError(Constantes.ERROR_BORRAR_CONTENIDO_SIN_COMPLETAR);
      }
    }
  };
  const handleCheckTarea = (e) => {
    const { checked } = e.target;
    const { id } = e.target;
    dispatch({ type: "CHECK_TAREA", increment: checked, id });
  };

  const handleDeleteTarea = (e) => {
    const { alt } = e.target;
    dispatch({ type: "DELETE", alt });
    //procesa y muestra un modal-No se pudo añadir en el reducer =(
    const resultadoAlt = state.listaTareas.find((e) => e.id == alt);
    if (!resultadoAlt.terminado) {
      setModalShow(true);
      setError(Constantes.ERROR_ANTES_ELIMINAR);
    }
  };

  const estilosParaBotonEliminar = {
    // width: "20%",
    height: "20%",
    width: "4%",
    height: " 0%",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    paddingTop: "0px",
    borderRightWidth: "0px",
    borderTopWidth: "0px",
    borderBottomWidth: " 0px",
    marginLeft: "0px",
    borderLeftWidth: "0px",
  };

  let mostrar = state.listaTareas.map((item) => (
    <tr key={item.id}>
      <td>
        <input
          id={item.id}
          onChange={handleCheckTarea}
          checked={item.terminado}
          type="checkbox"
        />
      </td>
      <td>{item.id}</td>
      <td
        style={
          item.terminado
            ? { textDecoration: " line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.nom}
      </td>
      <td
        style={
          item.terminado
            ? { textDecoration: " line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.des}
      </td>
      <td style={item.terminado ? { color: "green" } : { color: "red" }}>
        {item.estado}
        <button style={estilosParaBotonEliminar} onClick={handleDeleteTarea}>
          <img alt={item.id} height={"100%"} width={"100%"} src={imagenX} />
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <Alerta
        show={modalShow}
        detalles={error}
        onHide={() => setModalShow(false)}
      />

      <Titulo />
      <div className="container">
        <Input
          nombre={"Tarea"}
          title={title}
          evento={(event) => setTitle(event.target.value)}
          placeholder={"Ingrese una tarea a realizar"}
        />
        <Input
          nombre={"Descripcion"}
          title={descripcion}
          evento={(event) => setdescripcion(event.target.value)}
          placeholder={"Ingrese una Descripcion"}
        />

        <Boton
          colorFondo={"success"}
          nombre={"Agregar Tarea"}
          handleAddTarea={handleAddTarea}
        />
        <Boton
          colorFondo={"danger"}
          nombre={"Borrar contenido"}
          handleAddTarea={handleRestart}
        />
        <Tabla Tabla={mostrar} />
      </div>
      <Footer />
    </div>
  );
};

export default TODO;
