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
    setParada(busqueda);
    submitLineasParada();
  };
  const submitLineasParada = () => {
    if (datos[0].stop === null || datos[0].stop === undefined) {
      console.log(datos);
      setLineasParada(datos);
    } else {
      console.log(datos[0].stop);
      setLineasParada(datos.filter(paradaBus => paradaBus.stop === busqueda));
    }
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
