import { useContext } from "react";
import { Route, useParams } from "react-router";
import comprobarParada from "../comprobarParada";
import ParadasContext from "../contexts/ParadasContext";
import NotFound from "./NotFound";

function Linea() {
  let { id } = useParams();
  const { datosCompletosLinea } = useContext(ParadasContext);

  return (
    <>
      {
        comprobarParada(datosCompletosLinea, id)
          ? <>
            <header className="cabecera">
              <h2>Bus 109 - Hospital Clínic / Polígon Zona Franca</h2>
              <h3>Polígon Zona Franca -> Hospital Clínic</h3>
              <a href="/">Volver a la portada</a>
            </header>
            <section>
              <ul className="grafico-paradas">
                {/* Aquí va un map recorriendo la ruta de la linea,
           mostrando todas las paradas(o las paradas que le quedan) */}
                <li className="parada">Parada nº X: Nombre parada (<a href="http://maps.google.com/maps?z=19&t=m&q=loc:41.39122945530596, 2.180601982854977">ver mapa</a>)</li>
              </ul>
            </section>
          </>
          : <Route path="*" exact>
            <NotFound />
          </Route>
      }
    </>
  );
}

export default Linea;
