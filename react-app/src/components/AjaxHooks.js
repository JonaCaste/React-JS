import React, { useState, useEffect } from 'react';


function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks(){

    const [pokemons, setPokemons] = useState([]);


    //No volver al useEffect asincrono, mala practica, antipatron
    //en la doc nos recomiendan crear una funcion asincrona dentro de useEffect
    useEffect(() => {

        const getPokemons = async url => {

            let res = await fetch(url);
            let json = await res.json();

            json.results.forEach(async element => {
                let res = await fetch(element.url);
                let json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                }

                setPokemons(pokemons => [...pokemons, pokemon]);
            });

        }

        getPokemons("https://pokeapi.co/api/v2/pokemon/");

    }, []);

    return(
        <>
            <h2>Peticiones asincronas en Hooks</h2>
            {
                pokemons === 0 ? (
                    <h4>Cargando...</h4>
                    ) : (
                        pokemons.map(el => (
                            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                    ))
                )
            }
        </>
    );
}