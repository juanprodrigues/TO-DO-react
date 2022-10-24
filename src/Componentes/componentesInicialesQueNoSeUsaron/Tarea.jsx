import React, { useContext } from "react";
import { AppContext } from "../Contexto/AppContexto";

const Tarea = () => {
  const ctx = useContext(AppContext);
	const handleInput = ({ target }) => {

    ctx.setappTheme(target.value)
	}
  const hanleSubmit=(e)=>{
    e.preventDefault()
    console.log(e.value);
  }
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend" style={{width:'10%'}}>
          <span className="input-group-text" id="basic-addon1">
         Nombre
          </span>
        </div>
        {/* <Form.Label>Email address</Form.Label> */}
        <input onSubmit={hanleSubmit} onChange={handleInput} type="email" placeholder="Enter email" />
        {/* <Input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"> */}
      </div>
    </div>
  );
};

export default Tarea;
