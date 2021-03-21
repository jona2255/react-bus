import { useCallback, useState } from "react";
const useApi = () => {
  const [datos, setDatos] = useState(null);
  const pedirDatos = useCallback((url) => {
    console.log("uso de api");
    fetch(url)
      .then(resp => resp.json())
      .then(datosAPI => url.includes("ibus")
        ? setDatos(datosAPI.data.ibus)
        : setDatos(datosAPI)
      );
  }, []);
  return {
    datos,
    pedirDatos
  };
};

export default useApi;
