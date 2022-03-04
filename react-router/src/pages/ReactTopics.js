import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';

const Topic = () => {
    let {topic} = useParams();

    return <>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
}

const ReactTopics = () => {

  return <>
        <h3>Temas de React</h3>
        <ul>
            <li>
                <Link to="/react/jsx">JSX</Link>
            </li>
            <li>
                <Link to="/react/props">Props</Link>
            </li>
            <li>
                <Link to="/react/estado">Estado</Link>
            </li>
            <li>
                <Link to="/react/componente">Componente</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/:topic" element={<Topic />} />
        </Routes>

  </>;
};

export default ReactTopics;
