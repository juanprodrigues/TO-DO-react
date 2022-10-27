import React from "react";
import { Table } from "react-bootstrap";

const Tabla = ({Tabla}) => {
  return (
    <div>
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
        <tbody>{Tabla}</tbody>
      </Table>
    </div>
  );
};

export default Tabla;
