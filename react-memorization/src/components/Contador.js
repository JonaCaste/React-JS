import React, {useState, useCallback} from 'react';
import ContadorHijo from './ContadorHijo';

const Contador = () => {

    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    //memorizamos las funciones
        /*ya que, al heredar una funcion, esta renederiza de nuevo el padre(y sus funciones),
        renderizando de nuevos las funciones(que son props del hijo) y renderizando de nuevo el hijo*/

    // const sumar = () => setContador(contador + 1);
    const sumar = useCallback( () => {
        setContador(contador + 1);
    }, [contador]);
    
    // const restar = () => setContador(contador - 1);
    const restar = useCallback(() => setContador(contador - 1), [contador])
    const handleInput = e => setInput(e.target.value);

    return (
        <div>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
            <input type="text" onChange={handleInput} value={input} />
            <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
        </div>
    )
}

export default Contador