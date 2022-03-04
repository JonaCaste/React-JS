import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Productos = () => {

    //link -> /productos?inicio=1&fin=20

    //useLoacation nos devuelve un objeto con la info de la ruta
    // en search viene la info desde ?
    let {search} = useLocation();

    //serializamos el paso de los parametros
    let query = new URLSearchParams(search);

    let start = parseInt(query.get("inicio") || 1);
    let end = parseInt(query.get("fin") || 20);

    const limit = 20;

    //nos devuleve un objeto con el historico
    let navigate = useNavigate();

    const handlePrev = () => {
        navigate(`?inicio=${start - limit}&fin=${end - limit}`);
    }

    const handleNext = () => {
        navigate(`?inicio=${start + limit}&fin=${end + limit}`);
    }

    return (
    <div>
        <h3>Productos</h3>
        <p>Productos del <b>{start}</b> al <b>{end}</b></p>

        {start > limit && <button onClick={handlePrev}>Atras</button>}  
        <button onClick={handleNext}>Adelante</button>
    </div>
    );
};

export default Productos;
