import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
const TablaTarea = (props) => {
  // console.log('desde la tabla');
  // console.log("prop desde cargar tarea: "+props.cargarTarea);
  let mostrar='';

  useEffect(() => {
    console.log("tabla"+props.tareaMostrar);
    renderizar()
  },[])
  
  function renderizar() {
    mostrar= props.tareaMostrar.map((item) => (
   <tr>
     <td>[__]</td>
     <td>{item.key}</td>
     <td>{item.nombre}</td>
     <td>{item.descr}</td>
     <td>{item.estado}</td>
   </tr>
  ));
    
  }

  //   // console.log(ctx.appTheme);
  //   // console.log(ctx.appTheme1)
  //   console.log(props.tareaMostrar);
  //   mostrar= props.tareaMostrar.map((item) => (
  //       <tr>
  //         <td>[__]</td>
  //         <td></td>
  //         <td>{item[0]}</td>
  //         <td>{item[1]}</td>
  //         <td>@mdo</td>
  //       </tr>
  //     ));
  //     console.log('agrtegando a la listra');
  //     console.log(mostrar);
  // });
  // let mostrar='';
  // useEffect(() => {


  // let mostrar= props.tareaMostrar.map((item) => (
  //   <tr>
  //     <td>[__]</td>
  //     <td>{item.key}</td>
  //     <td>{item.nombre}</td>
  //     <td>{item.descr}</td>
  //     <td>{item.estado}</td>
  //   </tr>
  // ));

  // });
  // useEffect(() => {
  //   mostrar;
  // });

  // const mostrar = props.tareaMostrar.map((item) => (
  //   <tr>
  //     {/* <td>[__]</td>
  //         <td>1</td>
  //         <td>{ctx.setappTheme}</td>
  //         <td>{item.nombre}</td>
  //         <td>@mdo</td> */}

  //     <td>[__]</td>
  //     <td>1</td>
  //     <td>Mark</td>
  //     <td>Otto</td>
  //     <td>@mdo</td>
  //   </tr>
  // ));

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
        {mostrar}
      </tbody>
    </Table>
  );
};

export default TablaTarea;
