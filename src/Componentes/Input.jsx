import React from "react";

const Input = ({nombre,title,evento,placeholder}) => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend" style={{ width: "20%" }}>
          <span className="input-group-text" id="basic-addon1">
            {nombre}
          </span>
        </div>
        <input
          style={{ width: "70%" }}
          value={title}
          onChange={evento}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
