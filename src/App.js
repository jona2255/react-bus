function App() {
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Parada nº </h1>
        <div className="display">
          <div className="bus">
            <span className="linea"></span>
            <span className="destino"></span>
            <span className="tiempo"></span>
          </div>
        </div>
        <h2>Tiempo para la línea :</h2>
      </header>
      <section className="forms">
        <form>
          <label htmlFor="num-parada">Parada nº: </label>
          <input type="number" id="num-parada" />
          <button type="submit">Buscar</button>
        </form>
        <form>
          <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
          <select id="tiempo-linea">
            <option value="">Elige línea</option>
          </select>
        </form>
      </section>
    </div>
  );
}

export default App;
