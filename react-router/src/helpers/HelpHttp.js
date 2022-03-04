export const HelpHttp = () => {
    
    const customFetch = (endpoint, options) => {
        const defaultHeaders =  {
            //cabecera
            accept: "application/json",
        };

        //nos permite abortar una peticion si el servidor no responde
        //como un controlador de errorres
        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";

        options.headers = options.headers ? {...options.headers, ...defaultHeaders} : defaultHeaders;

        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;

        setTimeout(() => controller.abort(), 5000);

        return fetch(endpoint, options)
            .then(res => res.ok ? res.json() : Promise.reject({
                err: true,
                status: res.status || "000",
                statusText: res.statusText || "Ocurrio un error",
            }))
            .catch(err => err);
    }

    const get = (url, options={}) => customFetch(url, options);

    const post = (url, options={}) => {
        options.method = "POST";
        return customFetch(url, options);
    }

    const put = (url, options={}) => {
        options.method = "PUT";
        return customFetch(url, options);
    }

    const del = (url, options={}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    }

    //utilizamos shortCuts
    return {
        get,
        post,
        put,
        del,
    }

}