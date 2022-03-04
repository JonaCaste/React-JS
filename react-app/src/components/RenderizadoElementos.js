import React, { Component } from 'react';

import data from "../helpers/data.json";

function ElementoLista(props){

    return(
        <li>
            <a href={props.el.web}>{props.el.name}</a>
        </li>
    );

}

export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props);

        this.state = {
            seasons: ["primavera", "otoño", "invierno", "verano"]
        }
    }

    render(){

        console.log(data);

        return(
            <div>
                <h2>Renderizado de elementos</h2>

                <h3>Estaciones del años</h3>

                <ol>
                    {
                        this.state.seasons.map(season => <li key={season}>{season}</li>)
                    }
                </ol>

                <h3>Frameworks mas populares</h3>

                <ol>
                    {data.frameworks.map((el) => (
                    <ElementoLista key={el.id} el={el} />
                    ))}
                </ol>
            </div>
        );
    }

}