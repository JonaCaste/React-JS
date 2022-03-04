import React, {memo, useMemo} from 'react';

const ContadorHijo = ({contador, sumar, restar}) => {

    //se renderizaria de nuevo solo sí sus props internas cambian


    // let superNumero = 0;

    // for(let i; i<1000000000; i++){
    //     superNumero++;
    // }

    const superNumero = useMemo(() => {
        let numero = 0;

        for(let i=0; i<1000000000; i++){
            numero++;
        }

        return numero;

    }, []); //no tiene variable de estado, por eso el arreglo vacio

    console.log("El contador hijo se renderiza");

    return (
        <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
            <h2>Hijo del contador</h2>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{superNumero}</h3>
        </div>
    )
}

export default memo(ContadorHijo);