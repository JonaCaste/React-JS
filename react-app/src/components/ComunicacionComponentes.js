import React, { Component } from 'react'

export default class Padre extends Component{

    //property inicializer (iniciar sin constructor)
    state = {
        contador: 0
    }

    incrementarContador = e => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return(
            <>   {/*retornamos un fragmento*/}
                <h2>Comunicacion de Padre a Hijo</h2>
                <p><b>{this.state.contador}</b></p>

                {/* React es unidirecional, mandamos info de padre a hijo */}
                <Hijo mensaje="mensaje para el hijo" />

                {/* "Pasar" de hijo a padre */}
                <Hijo incrementarContador={this.incrementarContador} mensaje="mensaje para el hijo 2"/>

                {/* Pasar entre componentes no relacionales */}
                {/* Redux, Context, Portales(para dos elementos diferentes del DOM) */}
            </>
        );
    }
}

function Hijo(props){

    //se renderiza el padre, recordar que los componentes se renderizan cuando cambia el state o cuando le pasan props

    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    );
}