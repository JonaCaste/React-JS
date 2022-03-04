import React, { Component } from 'react'


class Reloj extends Component{
    // constructor(props){
    //     super(props);
    // }

    componentWillUnmount(){     //se desmonta el componente
        console.log(3, "El componente ha sido eliminado del DOM");
    }

    render(){
        return <h3>{this.props.hora}</h3>;
    }
}

//Ciclo de vida de los componentes de clase

export default class CicloVida extends Component{

    constructor(props){
        super(props);
        console.log(0, "se inicializa el componente(aún no esta en el DOM)");

        this.state = {
            hora: new Date().toLocaleTimeString(),   //nos da la hora en foemato legible
            visible: false,
        }

        this.temporizador = null;
    }

    componentDidMount(){    //se monta el componente
        /*se recomienda hacer peticiones desde aca, ya que previamente cargamos el 
        elemento(con render) y despues hacemos las peticiones*/

        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState){   //se actualiza el componente
        console.log(2, "El estado o las props han cambiado");
        console.log(2.1, prevProps);
        console.log(2.2, prevState);
    }

    /*componentWillUnmount(){     //se desmonta el componente
        console.log(3, "El componente ha sido eliminado del DOM");
    }*/



    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        },1000);
    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true,
        });
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        });
    }

    render(){       //se dibuja, redibuja o borra el compoenente
        console.log(4, "El componente se dibuja o redibuja");
        return(
            <>
                <h2>Ciclo de vida de los Componentes</h2>
                {/* <h3>{this.state.hora}</h3> */}
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }

}