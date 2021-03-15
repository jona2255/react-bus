const comprobarParada = (datos, parada) => {

  if (parada.length > 0) {
    return datos.find(paradaApi => paradaApi.stop === parada);
  };
};
export default comprobarParada;
