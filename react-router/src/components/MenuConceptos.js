import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuConceptos = () => {
  return (
      <nav>
          <ol> 
                {/* Renderiza de nuevo la app */}
                <li>
                    <span>Menú con enlaces HTML (no recomendado): </span>
                    <a href='/'>Home</a>
                    <a href='/acerca'>Acerca de</a>
                    <a href='/contacto'>Contacto</a>
                </li>

                {/* Mover el componente de menu al Router(link) */}
                <li>
                    <span>Componente Link: </span>
                    <Link to="/">Home</Link>
                    <Link to="/acerca">Acerca de</Link>
                    <Link to="/contacto">Contacto</Link>
                </li>

                {/* activeClassName -> aplica un css a la ruta que este activa */}
                <li>
                    <span>Componente NavLink: </span>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/acerca" activeClassName="active">Acerca de</NavLink>
                    <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
                    <NavLink to="/error" activeClassName="active">Error 400</NavLink>
                </li>
                <li>
                    <span>Parametros: </span>
                    <Link to="/usuario/jona">jona</Link>
                    <Link to="/usuario/juan">juan</Link>
                </li>
                <li>
                    <span>Parametros de consulta: </span>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <span>Redirecciones: </span>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <span>Rutas anidadas: </span>
                    <Link to="/react">React</Link>
                </li>
                <li>
                    <span>Rutas privadas</span>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
          </ol>
          
      </nav>
  );
};

export default MenuConceptos;
