import React, { useState, useEffect } from 'react';

const Reloj = ({hora}) => <h3>{hora}</h3>;

export default function RelojHooks(){

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    // const tictac = valor => setVisible(valor);

    useEffect(() => {
        let temporizador

        if(visible === true){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        } 
        else clearInterval(temporizador);

        return () => {
            console.log("Fase de desmontaje");
            clearInterval(temporizador);
        };
    }, [visible]);

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hora}/>}
            {/* <button onClick={() => tictac(true)}>+</button> */}
            {/* Una funcion que recibe un parametro adicional al evento, debe manejarse con aroow function */}
            {/* Recordemos que como queremos pasar parametro a la funcion debemos utilizar arrow function */}
            {/* <button onClick={() => tictac(false)}>-</button> */}

            {/* Mas simplificado */}
            <button onClick={() => setVisible(true)}>+</button>
            <button onClick={() => setVisible(false)}>-</button>
        </>
    );

}