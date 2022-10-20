import React from "react";
import { Form } from "react-bootstrap";

const Tarea = () => {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend" style={{width:'10%'}}>
          <span className="input-group-text" id="basic-addon1">
         Nombre
          </span>
        </div>
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"> */}
      </div>
    </div>
  );
};

export default Tarea;
