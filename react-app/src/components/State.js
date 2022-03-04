import React, {Component} from 'react';

function EstadoHijo(props){
    return(
        []
    );
}

export default class State extends Component{

    constructor(props){

        super(props);

        this.state = {
            contador : 0
        }

        setInterval(() => {
            this.setState({
                contador : this.state.contador+1
            });
        }, 1000);
    }


    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>

                <p>{this.state.contador}</p>

                <EstadoHijo estadoHijo={this.state} onCopy/>

            </div>
        );
    }

}
