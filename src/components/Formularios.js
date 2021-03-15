import { useContext } from "react";
import PropTypes from "prop-types"; // ES6
import ParadasContext from "../contexts/ParadasContext";
import FormNumeroParada from "./FormNumeroParada";
import FormTiempoLineas from "./FormTiempoLineas";
import comprobarParada from "../comprobarParada";
import BusquedaContext from "../contexts/BusquedaContext";

const Formularios = () => {
  const { datos } = useContext(ParadasContext);
  const { parada, setParada } = useContext(BusquedaContext);

  return (
    <section className="forms">
      <FormNumeroParada />
      {
        comprobarParada(datos, parada) && <FormTiempoLineas />
      }

    </section>
  );
};

export default Formularios;
