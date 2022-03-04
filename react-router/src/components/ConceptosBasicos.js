import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, HashRouter, Link } from "react-router-dom";
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';

const ConceptosBasicos = () => {

    /* simulamos autenticacion */

        const [auth, setAuth] = useState(null);

        const handleAuthLogin = () => {
            setAuth(true);
            console.log(auth);
        }

        const handleAuthSignOut = () => {
            setAuth(null);
            console.log(auth);
        }

    /*  */

    return (
        <div>

            <h2>Hash Router</h2>
            <HashRouter>
                <nav>
                    <Link to="/">home</Link>
                    <Link to="/acerca">Acerca</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
                <Routes>
                    <Route strict path="/" element={<Home/>} />
                    <Route path="/acerca" element={<Acerca/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </HashRouter>
            <hr />

            <h2>Conceptos Básicos</h2>
            <Router>
                <MenuConceptos />

                {/* Routes para que solo cargue la primera considencia */}
                {/* Hacer de las mas especificas a las mas generales (old version)*/}
                <Routes>

                    {/* strict -> carga cuando este exactamente esa ruta*/}
                    <Route strict path="/" element={<Home/>} />
                    <Route path="/acerca" element={<Acerca/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    {/* Redireccion */}
                    <Route path="/about" element={<Navigate to="/acerca" />} />
                    
                    {/* Parametros */}
                    {/* : -> carga dinamicamente un parametro */}
                    <Route path="/usuario/:username" element={<Usuario />} />
                    {/* parametros de consulta */}
                    <Route path="/productos" element={<Productos />} />
                    
                    {/* 404 siempre al final */}
                    <Route path="*" element={<Error404 />} />

                    {/* /* -> indica que es anidada */}
                    <Route path="/react/*" element={<ReactTopics />} />

                    <Route path="/login" element={<Login handleAuthLogin={handleAuthLogin} handleAuthSignOut={handleAuthSignOut} />} />
                    <Route path="/dashboard" element={ auth ? <Dashboard/> : <Navigate to="/login" /> } />


                    {/* Importante (en despliegue)
                        React Router realiza condicional render de acuerdo a la url que se encuentre en ese momento
                        * si despues cargamos esa url, tendremos un error 404 si el server no esta diseñado para cargar dichas rutas
                    */}

                    {/* Hash Router - ayudar con las rutas sin soporte en el server */}
                    {/* Al utilizar el # le indicamos a react que no es otra carpeta, si no que es 
                    un recurso que estamos buscando dentro de por ejemplo el index.html */}

                </Routes>
            </Router>
        </div>
    )
}

export default ConceptosBasicos
