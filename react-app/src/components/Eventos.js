import React, { Component } from 'react'

export class EventosES6 extends Component{

    constructor(props){
        super(props);

        this.state = {
            contador : 0,
        }

        this.sumar = this.sumar.bind(this);
        /* le asignamos a nuestra clase una propiedad sumar
            que igualamos a nuestro sumar enlazado con nuestro this 
            como lo enlazamos con this, el constructor sabe que es el sumar de la clase*/

        /* el sumar esta en el contexto de la clase por eso el bind */

        this.restar = this.restar.bind(this);
    }

    sumar(){
        /* el this apunta a nuestro bloque {}
            una arrow function no genera un sacope {} -> poe eso apunta al scope global
            bind enlasa el scope del objeto que le indiquemos como parametro*/

        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar(){
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos de componentes clases ES6</h2>

                <h3>{this.state.contador}</h3>

                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                    {/*si agregamos la funcion con (), esta se ejucata al recargar la pagina*/}
                </nav>
            </div>
        );
    }

}


export class EventosES7 extends Component{

    // constructor(props){
    //     super(props);
    // }

    //quitamos el constructor y creamos el estado directamente
    state = {
        contador: 0
    }

    //cambiamos las function por arrow function
    //arrow function hereda el contexto (el this va a hacer referencia a la clas)
    sumar = () => { 
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos de componentes clases ES7</h2>
                <h3>Este es un prop: {this.props.nombre}</h3>

                <h3>{this.state.contador}</h3>

                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                    {/*si agregamos la funcion con (), esta se ejucata al recargar la pagina*/}
                </nav>
            </div>
        );
    }

}

//    creamos un componente boton - recordar que por buenas practicas debe ir en su propio archivo
// function Boton(props){
//     return <button onClick={props.myOnClick}>Boton hecho componente</button>
//     //aca ya tenemos sintaxis JSX
// }

//     tambien podemos un arrow function
// const Boton = props => <button onClick={props.myOnClick}>Boton hecho componente</button>;

//     tambien podemos hacer destructuracion
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Boton hecho componente</button>;

export class MasEventos extends Component{

    handleClick = (e, mensaje) => {
        //evento sintatico, eventos que maneja react
        console.log(e);
        //evento nativo, evento de js
        console.log(e.nativeEvent);
    }

    render(){
        return(
            <div>
                <h2>Más sobre eventos</h2>

                {/* <button onClick={this.handleClick}>Saludar</button> */}
                {/* recordar que al agregar () se ejecuta la recargar la pagina */}

                <button onClick={e => this.handleClick(e, "mensaje de evento")}>Saludar</button>
                {/* como un evento solo puede recibir su evento, utilizamos arrow function para
                    para enviar mas parametros; tambien podriamos bindear.
                    como ahora se maneja el evento con la arrow function, ella recibe el evento
                    y lo envia a handleClick */}

                {/* <Boton onClick={e => this.handleClick(e, "mensaje de evento por componente")} /> */}
                {/* No funciona por que no es sintaxis JSX, si no un componente de react */}

                {/* Evento personalizado -> crear una prop */}
                <Boton myOnClick={e => this.handleClick(e, "mensaje de evento por componente")} />
            </div>
        );
    }
}