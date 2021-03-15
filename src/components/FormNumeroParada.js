import { useContext, useState } from "react";
import BusquedaContext from "../contexts/BusquedaContext";

const FormNumeroParada = () => {
  const { parada, setParada } = useContext(BusquedaContext);
  const [busqueda, setBusqueda] = useState("");
  const inputParada = (e) => {
    setBusqueda(e.target.value);
  };
  const submitParada = (e) => {
    e.preventDefault();
    setParada(busqueda);
  };
  return (
    <form onSubmit={submitParada}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input type="number" id="num-parada" onChange={inputParada} />
      <button type="submit">Buscar</button>
    </form>
  );
};
export default FormNumeroParada;
