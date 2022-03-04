import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* <a ref="https://reactrouter.com/" target="_blank" rel="noreferrer">Documentación</a> */}

      <hr />
      
      <h2>Ejercicios React Router</h2>
      <SongSearch />

      <hr style={{width: "70%"}}/>
      <CrudApi />

      <hr/>
      <ConceptosBasicos />
    </div>
  );
}

export default App;
