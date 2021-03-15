import { useEffect, useState } from "react";

const useApi = url => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(datosAPI => {
        setDatos(datosAPI.data.ibus);
      });
  }, [url]);
  return {
    datos
  };
};

export default useApi;
