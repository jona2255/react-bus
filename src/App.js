import { useState } from "react";
import DatosParadas from "./components/DatosParadas";
import Formularios from "./components/Formularios";
import ParadasContext from "./contexts/ParadasContext";
import useApi from "./hooks/useApi";
import datosApi from "./datosApi.json";
import BusquedaContext from "./contexts/BusquedaContext";

function App() {
  const [parada, setParada] = useState("");
  const [linea, setLinea] = useState("");
  const [lineasParada, setLineasParada] = useState("");

  // Como prueba y para no hacer demasiadas peticiones a la api, sacamos los datos de datosApi.json.
  /*
  // https://api.tmb.cat/v1/ibus/stops/?app_id=4f77fb07&app_key=10bac298a6d75ba5ac9bbf27ddd58aee
  const { datos } = useApi(`${process.env.REACT_APP_API_URL}${busqueda}?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
 */
  const [datos, setDatos] = useState(datosApi.data.ibus);

  return (
    <ParadasContext.Provider value={{ datos }}>
      <BusquedaContext.Provider value={{ parada, setParada, linea, setLinea, lineasParada, setLineasParada }}>
        <div className="contenedor">
          <DatosParadas />
          <Formularios />
        </div>
      </BusquedaContext.Provider>
    </ ParadasContext.Provider >
  );
}

export default App;
