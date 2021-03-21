import { useContext } from "react";
import BusquedaContext from "../contexts/BusquedaContext";
import ParadasContext from "../contexts/ParadasContext";

const FormTiempoLineas = () => {
  const { parada, setParada, linea, setLinea } = useContext(BusquedaContext);
  const { datos } = useContext(ParadasContext);
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" onChange={({ target: { value } }) => setLinea(value)}>
        <option>Elige línea</option>
        {
          datos.map((paradaBus, index) => (
            <option key={index}>{paradaBus.line}</option>
          ))
        }
      </select>
    </form>
  );
};
export default FormTiempoLineas;
