import React from 'react';
import { useParams } from 'react-router-dom';

const Usuario = () => {

    //Nos devuelve un objeto con todos los parametros de la url
    let {username} = useParams();

    return <div>
        <h3>Perfil del usuario</h3>
        <p>Nombre del usuario <b>{username}</b></p>
    </div>;
};

export default Usuario;
