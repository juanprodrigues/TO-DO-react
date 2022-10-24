import React, { useReducer, useState } from "react";
import { Button, Table } from "react-bootstrap";
import imagenX from "../imagenes/iconX.jpg";

const initialState = {
  count: 0,
  countInterval: 0,
  increment: true,
  tareaInput: "",
  descripcionInput: "",
  listaTareas: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
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
    case "SET_INTERVEL":
      return {
        ...state,
        countInterval: parseInt(action.countInterval),
      };
    case "INCREASE_COUNT":
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
    //disparar un limpiador

    case "DECREASE_COUNT":
      return {
        ...state,
        count: state.count - state.countInterval,
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
      } else {
        alert("La tareas no esta completada aunc");
      }
      return state;

    case "RESTART":
    //   state.listaTareas.length = 0;
      return initialState;

    default:
      //Lanzar un error
      return state;
  }
};
// ----------------------------------------------------------------------
const TODO = () => {
  const [title, setTitle] = useState("");
  const [descripcion, setdescripcion] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleCount = (e) => {
    if (title && descripcion) {
      if (state.increment) {
        dispatch({
          type: "INCREASE_COUNT",
          tareaInput: title,
          descripcionInput: descripcion,
        });
      } else {
        dispatch({ type: "DECREASE_COUNT", descripcionInput: descripcion });
      }
      setTitle("");
      setdescripcion("");
    } else {
      alert("Campos vacios");
    }
  };
  const handleRestar = (e) => {
    dispatch({ type: "RESTART" });
  };
  const handleIncrement = (e) => {
    const { checked } = e.target;
    const { id } = e.target;
    dispatch({ type: "INCREMENT", increment: checked, id });
  };

  const handleImagen = (e) => {
    const { alt } = e.target;
    dispatch({ type: "DELETE", alt });
  };

  const estilosParaBotonEliminar = {
    width: "20%",
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
    <tr>
      <td>
        <input
          id={item.id}
          onChange={handleIncrement}
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
        <button style={estilosParaBotonEliminar} onClick={handleImagen}>
          <img alt={item.id} height={"100%"} width={"100%"} src={imagenX} />
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <br />
      <h1 className="text-center">TO DO</h1>
      <br />
      <br />
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend" style={{ width: "10%" }}>
            <span className="input-group-text" id="basic-addon1">
              Tarea
            </span>
          </div>
          <input
            style={{ width: "70%" }}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Ingrese de tarea"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend" style={{ width: "10%" }}>
            <span className="input-group-text" id="basic-addon1">
              Descripcion
            </span>
          </div>
          <input
            style={{ width: "70%" }}
            onChange={(event) => setdescripcion(event.target.value)}
            value={descripcion}
            type="text"
            placeholder="Ingrese Descripcion"
          />
        </div>
        <Button
          onClick={handleCount}
          style={{ width: "49%" }}
          variant="success"
        >
          Agregar Tarea
        </Button>
        <Button
          onClick={handleRestar}
          style={{ width: "50%" }}
          variant="danger"
        >
          Borrar contenido
        </Button>{" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>[X]</th>
              <th>Id</th>
              <th>Tarea</th>
              <th>Descripcion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>{mostrar}</tbody>
        </Table>
      </div>
      <h6
        className="text-center"
        style={{ position: "fixed", bottom: "0", left: "40%" }}
      >
        {" "}
        Repositorio git <a href="http://"></a>
      </h6>
    </div>
  );
};

export default TODO;
