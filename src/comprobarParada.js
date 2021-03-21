const comprobarParada = (datos, busqueda) => {
  if (datos) {
    if (busqueda.length > 0 && datos.length > 0) {
      return true;
    } else if (datos && datos.crs) {
      return datos.features.find(paradaApi => paradaApi.properties.NOM_LINIA === busqueda);
    }
  }
};
export default comprobarParada;
