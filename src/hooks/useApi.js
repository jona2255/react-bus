import { useCallback, useState } from "react";

const useApi = () => {
  const [datos, setDatos] = useState(null);
  const pedirDatos = useCallback((url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(datosAPI => url.includes("ibus")
        ? setDatos(datosAPI.data.ibus)
        : setDatos(datosAPI.features)
      );
  }, []);
  return {
    datos,
    pedirDatos
  };
};

export default useApi;
