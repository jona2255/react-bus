import { useContext, useState } from "react";
import BusquedaContext from "../contexts/BusquedaContext";
import ParadasContext from "../contexts/ParadasContext";
import TiempoContext from "../contexts/TiempoContext";

const FormTiempoLineas = () => {
  const { parada, setParada, linea, setLinea } = useContext(BusquedaContext);
  const { tiempo, setTiempo } = useContext(TiempoContext);
  const { datos } = useContext(ParadasContext);
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" onChange={({ target: { value } }) => {
        setLinea(value);

        setTiempo(datos.filter(paradaBus => paradaBus.line === value)[0].["text-ca"]);

      }}>
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
