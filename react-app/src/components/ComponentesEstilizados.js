//Styled components

//Lo instalamos con `npm install --save styled-components`

import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados(){

    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380";

    const setTransitionTime = time => `all ${time} ease-out`

    const fadeIn = keyframes`
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    `; 

    const StyledH3 = styled.h3 `
        padding: 2vw;
        text-align: center;
        background-color: ${mainColor};

        transition: ${setTransitionTime("1s")};

        /*color: ${props => props.color};*/
        color: ${({color}) => color || "#000"};

        animation: ${fadeIn} 5s ease-out;

        //funcion css -> nos permite utilizar styled-components dentro de styled-components
        ${props => props.isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 25px;
            cursor: pointer;
        `}

        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;

    const ligth = {
        color: "#222",
        bgColor: "#ddd",
    }

    const dark = {
        color: "#ddd",
        bgColor: "#222",
    }

    const Box = styled.div`
        padding: 1vw;
        margin: 1vw;

        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    //Heredamos los estilos de Box
    const BoxRounded = styled(Box)`
        border-radius: 20px;
    `;

    //Los estilos globales van en index o App, ya que son estilos globales
    const GlobalStyle = createGlobalStyle`
        a{
            text-decoration: none;
        }

        h2{
            padding: 2vw;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        }
    `;

    return(
        <>
            <GlobalStyle />
            <h2>Componentes estilizados</h2>
            <StyledH3>Componete estilizado con styled-components</StyledH3>
            <StyledH3 color="#61dafb">Componete estilizado con styled-components</StyledH3>
            <StyledH3 isButton>Componete estilizado como boton</StyledH3>

            {/* Crea un contexto */}
            <ThemeProvider theme={ligth}>
                {/* Seccion */}
                <Box>Este es un theme ligth</Box>
                <BoxRounded>Esta es una caja Redondeada ligth</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                {/* Seccion */}
                <Box>Este es un theme dark</Box>
                <BoxRounded>Esta es una caja Redondeada dark</BoxRounded>
            </ThemeProvider>
        </>
    );
}