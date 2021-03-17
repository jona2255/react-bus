import { useCallback, useState } from "react";

const useApi = () => {
  const [datos, setDatos] = useState(null);
  const pedirDatos = useCallback((url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(datosAPI => setDatos(datosAPI.data.ibus));
  }, []);
  return {
    datos
  };
};

export default useApi;
