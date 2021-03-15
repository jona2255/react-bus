import { useContext } from "react";
import comprobarParada from "../comprobarParada";
import BusquedaContext from "../contexts/BusquedaContext";
import ParadasContext from "../contexts/ParadasContext";

const NumeroParada = () => {
  const { datos } = useContext(ParadasContext);
  const { parada, setParada } = useContext(BusquedaContext);

  return (
    <h1>{`${comprobarParada(datos, parada) ? "Parada nº " + parada : "No existe la parada " + parada}`}</h1>
  );
};
export default NumeroParada;
