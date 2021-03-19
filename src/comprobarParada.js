const comprobarParada = (datos, busqueda) => {
  if (busqueda.length > 0 && datos.length > 0) {
    return datos.find(paradaApi => paradaApi.stop === busqueda);
  } else if (datos.crs) {
    return datos.features.find(paradaApi => paradaApi.properties.NOM_LINIA === busqueda);
  }
};
export default comprobarParada;
