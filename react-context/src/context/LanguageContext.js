import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translation = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
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
    headerTitle: "My application with Context API",
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

//Provider
const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translation[language]);

    const handleLanguage = e => {
        setLanguage(e.target.value);
        setTexts(translation[e.target.value]);
    };

    const data= {texts, handleLanguage};

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>;
}

export {LanguageProvider};
export default LanguageContext;