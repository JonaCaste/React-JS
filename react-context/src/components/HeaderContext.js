import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

const HeaderContext = () => {

  const {theme, handleTheme} = useContext(ThemeContext);
                                          //recibe el contexto que creamos con createContext
  const {texts, handleLanguage} = useContext(LanguageContext);   
  const {auth, handleAuth} = useContext(AuthContext);

  return (
    <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>

        <select name='Language' onChange={handleLanguage}>
            <option value="es">Español</option>
            <option value="en">Ingles</option>
        </select>

        <input type="radio" name='theme' id='light-context' value="light" onClick={handleTheme} />
        <label htmlFor="light-context">{texts.headerLight}</label>

        <input type="radio" name='theme' id='dark-context' value="dark" onClick={handleTheme} />
        <label htmlFor="dark-context">{texts.headerDark}</label>

        <button onClick={handleAuth} >{auth ? texts.buttonLogout : texts.buttonLogin}</button>
    </header>
  )
}

export default HeaderContext;