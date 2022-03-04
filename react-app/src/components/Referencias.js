// nos permite manipular elementos del DOM ya cargados, sin necesidad de renderizarlos

import React, {/*createRef,*/ useRef} from 'react';

export default function Referencias(){

    //componente de clase
    // let refMenu = createRef();

    //componentes funcionales
    let refMenu = useRef(),
        refMenuBoton = useRef();

    //console.log(refMenu, refMenuBoton);
    
    const handleToggleMenu = e => {

        //vanila js
        // const menu = document.getElementById("menu");

        // if(e.target.textContent === "Menú"){
        //     e.target.textContent = "Cerrar";
        //     menu.style.display = "block";
        // }
        // else{
        //     e.target.textContent = "Menú";
        //     menu.style.display = "none";
        // }


        //useRef()
        if(refMenuBoton.current.textContent === "Menú"){
            refMenuBoton.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }
        else{
            refMenuBoton.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }

    return (
        <>
        <h2>Referencias</h2>

        <button id="menu-button" ref={refMenuBoton} onClick={handleToggleMenu}>Menú</button>
        <nav id="menu" ref={refMenu} style={{display: "none"}}>
            {/*eslint-disable-next-line*/}
            <a href="#">Sección 1</a>
            <br/>
            {/*eslint-disable-next-line*/}
            <a href="#">Sección 2</a>
            <br/>
            {/*eslint-disable-next-line*/}
            <a href="#">Sección 3</a>
            <br/>
            {/*eslint-disable-next-line*/}
            <a href="#">Sección 4</a>
            <br/>
            {/*eslint-disable-next-line*/}
            <a href="#">Sección 5</a>
            <br/>
        </nav>
        </>
    );
}