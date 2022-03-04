import logo from './logo.svg';
import './App.css';

import State from './components/State'
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import Contador from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <State name="Esto es una propiedad del componente"/>
        <hr width="80%"/>
        <RenderizadoElementos/>
        <hr width="80%"/>
        <EventosES6/>
        <EventosES7 nombre="prop de ES7"/>
        <MasEventos/>
        <hr width="80%"/>
        <Padre/>
        <hr width="80%"/>
        <CicloVida />
        <hr width="80%"/>
        <AjaxApis/>
        <br/>
        <hr width="80%"/>
        <Contador/>
        <hr width="80%"/>
        <ScrollHooks/>
        <hr width="80%"/>
        <RelojHooks />
        <hr width="80%"/>
        <AjaxHooks/>
        <hr width="80%"/>
        <HooksPersonalizados/>
        <hr width="80%"/>
        <Referencias/>
        <hr width="80%"/>
        <Formularios/>
        <hr width="80%"/>
        <Estilos />
        <hr width="80%"/>
        <ComponentesEstilizados />
      </header>
    </div>
  );
}

export default App;
