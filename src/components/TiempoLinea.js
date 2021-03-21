import { useContext, useState } from "react";
import TiempoContext from "../contexts/TiempoContext";
import FormTiempoLineas from "./FormTiempoLineas";

const TiempoLinea = () => {
  const { tiempo, setTiempo } = useContext(TiempoContext);


  return (
    <h2>Tiempo para la línea : {tiempo} </h2>
  );
};
export default TiempoLinea;
