import Botones from "./Componentes/Botones";
import Descripcion from "./Componentes/Descripcion";
import TablaTarea from "./Componentes/TablaTarea";
import Tarea from "./Componentes/Tarea";

function App() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="container text-center">
        <h1>Organizador de tareas</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <Tarea />
        <Descripcion />
        <Botones />
        <TablaTarea />
      </div>
    </>
  );
}

export default App;
