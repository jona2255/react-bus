import { useContext, useState } from "react";
import BusquedaContext from "../contexts/BusquedaContext";
import ParadasContext from "../contexts/ParadasContext";

const FormNumeroParada = () => {
  const { setParada, setLineasParada } = useContext(BusquedaContext);
  const { datos } = useContext(ParadasContext);
  const [busqueda, setBusqueda] = useState("");
  const inputParada = (e) => {
    setBusqueda(e.target.value);
  };
  const submitParada = (e) => {
    e.preventDefault();
    setLineasParada(datos.filter(paradaBus => paradaBus.stop === busqueda));
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
