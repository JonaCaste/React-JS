import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = "ligth";
const initialLanguage = "es";
const initialAuth = null;
const translation = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
}

const MyPage = () => {

  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = e => setTheme(e.target.value);
  const handleLanguage = e => {
    setLanguage(e.target.value);
    setTexts(translation[e.target.value]);
  };
  const handleAuth = () => {
    if (auth) setAuth(null);
    else setAuth(true);
  };

  return (
    <div className='my-page'>
      <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage}
        auth={auth} handleAuth={handleAuth} />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />      
    </div>
  )
}

export default MyPage;