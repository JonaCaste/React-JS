import React, { useState } from 'react';

export default function Contador(props){

    //definimos la configuracion de useState
    const [contador, setContador] = useState(0); 
    //     valor,    f. que actualiza        valor inicial

    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);

    return(
        <>
            <h2>Hooks - useState</h2>
            <h3>Contador de {props.titulo}</h3>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
        </>
    );
}


Contador.defaultProps = {
    titulo: "clicks",
}