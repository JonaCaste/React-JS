//rfc
import React, { useState, useEffect } from 'react'

export default function ScrollHooks(){

    //usf
    const [scrollY, setScrollY] = useState(0);

    //ufe
    //se actualiza cuando la variable scrollY tenga cambios
    useEffect(()=>{
        //console.log("moviendo el scroll, tambien es fase de actualizacion");

        const detectarScroll = () => {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", detectarScroll);


        return () => window.removeEventListener("scroll", detectarScroll);
    }, [scrollY]);


    //solo se ejecuta cuando la vaiable scrollY cambia
    //si dejamos el [] vacio, solo se ejecuta una vez
    useEffect(()=>{
        //console.log("fase de monatje");
    }, []/* dependencias */);

    //cada vez que se vuelva a renderizar el componente, se renderiza todo lo que este en el efecto
    useEffect(()=>{
        //console.log("fase de actualizacion");
    }); //no se recomienda dejar esto vacio

    //retornamos una funcion de un efecto
    useEffect(() => {
        return() => {
            //console.log("fase de desmontaje");
        };
    });

    return(
        <>
            <h2>Hooks - useEffect</h2>
            <p>ScrollY del navegador: {scrollY}px</p>
        </>
    );

}

