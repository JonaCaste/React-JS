import React from 'react';
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss"

export default function Estilos(){

    let style = {
        borderRadius: "25px", 
        margin: "25px",
        maxWidth: "50%",
    }

    return(
        <>
            <section className="estilos">
                <h2>Estilos en React</h2>
                <h3 className="bg-react">Estilos en hoja CSS externa</h3>
                <h3 className="bg-react" style={{borderRadius: "25px", margin: "25px"}}>Estilos en linea(atributo style)</h3>
                <h3 className="bg-react" style={style}>Estilos en linea(con objeto)</h3>
                <h3 className={moduleStyles.error}>Estilos con modulos</h3>

                {/* Instalamos Sass con `npm install node-sass` */}
                <h3 className="bg-sass">Estilos con SASS</h3>

                {/* Normalizamos el css gracias a create reactapp */}
                {/* llamarla en index.css */}
                <p>Normalizamos el css con:</p>
                <code>@import-normalize;</code>
            </section>
        </>
    );
}