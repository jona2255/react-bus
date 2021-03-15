import DatosParadas from "./components/DatosParadas";
import Formularios from "./components/Formularios";
import ParadasContext from "./contexts/ParadasContext";

function App() {
  return (
    <ParadasContext.Provider value={"valor a pasar en el context"}>
      <div className="contenedor">
        <DatosParadas />
        <Formularios />
      </div>
    </ParadasContext.Provider>
  );
}

export default App;
