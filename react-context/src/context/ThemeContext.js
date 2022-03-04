import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "ligth";

//Provee los valores que les va a pasar a los hijos internos 
const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = e => setTheme(e.target.value);

    const data = {theme, handleTheme};

    return(
        <ThemeContext.Provider value={data} >{children}</ThemeContext.Provider>
    );
};

export {ThemeProvider};
export default ThemeContext;