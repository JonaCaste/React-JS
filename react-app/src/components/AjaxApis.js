import React, { Component } from 'react'

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component{

    //property inicializer
    state = {
        pokemons: [],
    }

    //peticiones
    componentDidMount(){
        let url="https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                //console.log(json);
                json.results.forEach(element => {
                    fetch(element.url)
                        .then(res => res.json())
                        .then(json => {
                            //console.log(json);

                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            }

                            //spread operator
                            let pokemons = [...this.state.pokemons, pokemon];
                            this.setState({
                                pokemons,
                            });
                        });
                });
            });
    }

    render(){
        return(
            <>
                <h2>Peticiones asincronas en los Componentes</h2>
                {
                    this.state.pokemons === 0 ? (
                        <h4>Cargando</h4>
                        ) : (
                            this.state.pokemons.map(el => (
                                <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                        ))
                    )
                }
            </>
        );
    }
}