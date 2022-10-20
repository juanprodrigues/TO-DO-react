import React from 'react';
import Table from 'react-bootstrap/Table';
const TablaTarea = () => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
          <th>[X]</th>
            <th>#</th>
            <th>Tarea</th>
            <th>Descripcion</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>[__]</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
          <td>[X]</td>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>

        </tbody>
      </Table>
    );
};

export default TablaTarea;