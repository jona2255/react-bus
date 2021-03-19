import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import DatosParadas from "./components/DatosParadas";
import Formularios from "./components/Formularios";
import ParadasContext from "./contexts/ParadasContext";
import useApi from "./hooks/useApi";
import datosApi from "./datosApi.json";
import datosLineas from "./datosLineas.json";
import BusquedaContext from "./contexts/BusquedaContext";
import Linea from "./paginas/Linea";
import NotFound from "./paginas/NotFound";
import Parada from "./paginas/Parada";


function App() {
  const [parada, setParada] = useState("");
  const [linea, setLinea] = useState("");
  const [lineasParada, setLineasParada] = useState("");

  // Como prueba y para no hacer demasiadas peticiones a la api, sacamos los datos de datosApi.json.

  // https://api.tmb.cat/v1/ibus/stops/?app_id=4f77fb07&app_key=10bac298a6d75ba5ac9bbf27ddd58aee
  /*   const { datos: datosParadas, pedirDatos: pedirDatosParadas } = useApi();
    const { datos, pedirDatos } = useApi();
    useEffect(() => {
      pedirDatosParadas(`${process.env.REACT_APP_API_URL_PARADAS}?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
    }, [pedirDatosParadas]);
    useEffect(() => {
      if (datosParadas) {
        pedirDatos(`${process.env.REACT_APP_API_URL_PARADAS}${parada}?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      }
    }, [datosParadas, parada, pedirDatos]);
    /*   useEffect(()=> {
      if(datosParadas) {
        pedirDatos(`${process.env.REACT_APP_API_URL_PARADAS}${parada}?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      }
    },[datosParadas, pedirDatos]);
   * /
    */
  const [datos, setDatos] = useState(datosApi.data.ibus);
  const [datosCompletosLinea, setDatosCompletosLinea] = useState(datosLineas);
  return (
    <Router>
      <main>
        <ParadasContext.Provider value={{ datos, datosCompletosLinea }}>
          <BusquedaContext.Provider value={{ parada, setParada, linea, setLinea, lineasParada, setLineasParada }}>
            <Switch>
              <Route path="/parada" exact>
                <Parada />
              </Route>
              <Route path="/linea/:id">
                <Linea />
              </Route>
              <Route path="/" exact>
                <Redirect to="/parada" />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </BusquedaContext.Provider>
        </ ParadasContext.Provider >
      </main>
    </Router>
  );
}

export default App;
