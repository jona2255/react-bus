import NumeroParada from "./NumeroParada";
import TiempoLinea from "./TiempoLinea";
import TiemposLineasParadas from "./TiemposLineasParada";

const DatosParadas = () => {
  return (
    <header className="cabecera">
      <NumeroParada />
      <TiemposLineasParadas />
      <TiempoLinea />
    </header>
  );
};
export default DatosParadas;
