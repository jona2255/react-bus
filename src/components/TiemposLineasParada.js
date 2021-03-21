import { useCallback, useContext, useEffect, useState } from "react";
import BusquedaContext from "../contexts/BusquedaContext";
import ParadasContext from "../contexts/ParadasContext";

const TiemposLineasParadas = () => {
  const { parada, lineasParada } = useContext(BusquedaContext);
  const { datos } = useContext(ParadasContext);
  const [busqueda, setBusqueda] = useState("");
  const [linea, setLinea] = useState("");
  const [destino, setDestino] = useState("");
  const [tiempo, setTiempo] = useState("");
  useEffect(() => {
    let i = 0;
    let tempo;
    clearInterval(tempo);

    const cambiarDisplay = () => {
      i = ++i % lineasParada.length;
      setLinea(lineasParada[i].line);
      setDestino(lineasParada[i].destination);
      setTiempo(lineasParada[i].["text-ca"]);
    };
    if (lineasParada[i] !== undefined) {
      tempo = setInterval(cambiarDisplay, 2000);
    }
  }, [lineasParada]);
  return (
    <div className="display">
      <div className="bus">
        <span className="linea">{linea}</span>
        <span className="destino">{destino}</span>
        <span className="tiempo">{tiempo}</span>
      </div>
    </div>
  );
};

export default TiemposLineasParadas;
