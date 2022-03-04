import React, { useState } from 'react';

//forma sencilla, un state por variable
// export default function Formularios(){

//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);

//     const handleSubmit = e => {
//         e.prevent.default();
//         alert("El formulario se ha enviado");
//     }

//     return(
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input type="text" id="nombre" name="nombre" value={nombre} 
//                     defaultValue="Escribe tu nombre" onChange={e => setNombre(e.target.value)}/>

//                 <p>Tu sabor favorito es: {sabor}</p>
//                 <input type="radio" id="fresa" name="sabor" value="fresa" 
//                     defaultChecked onChange={(e) => setSabor(e.target.value)} />
//                 <label htmlFor="fresa">Fresa</label>

//                 <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e) => setSabor(e.target.value)} />
//                 <label htmlFor="vanilla">Vanilla</label>

//                 <input type="radio" id="chocolate" name="sabor" value="chocolate" onChange={(e) => setSabor(e.target.value)} />
//                 <label htmlFor="chocolate">Chocolate</label>


//                 <p>Tu lenguaje favorito es: {lenguaje}</p>
//                 <select name="lenguaje" onChange={e => setLenguaje(e.target.value)}>
//                     <option value="" defaultValue>-----</option>
//                     <option value="js">JS</option>
//                     <option value="python">Python</option>
//                     <option value="java">Java</option>
//                     <option value="c++">C++</option>
//                     <option value="go">Go</option>
//                 </select>

//                 <br/>

//                 <label htmlFor="terminos">Acepto términos y condicones</label>
//                 <input type="checkbox" id="terminos" name="terminos" onChange={e => setTerminos(e.target.checked)} />

//                 <input type="submit" />
//             </form>
//         </>
//     );
// }


//forma pro, solo un state
export default function Formularios(){

    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            //destructuramos para convertir el evento(con el name de quien lo origino) en propiedad
        });
    }

    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
            //destructuramos para convertir el evento(con el name de quien lo origino) en propiedad
        });
    }

    const handleSubmit = e => {
        e.prevent.default();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} 
                    defaultValue="Escribe tu nombre" onChange={handleChange}/>

                <p>Tu sabor favorito es: {form.sabor}</p>
                <input type="radio" id="fresa" name="sabor" value="fresa" 
                    defaultChecked onChange={handleChange} />
                <label htmlFor="fresa">Fresa</label>

                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} />
                <label htmlFor="vanilla">Vanilla</label>

                <input type="radio" id="chocolate" name="sabor" value="chocolate" onChange={handleChange} />
                <label htmlFor="chocolate">Chocolate</label>


                <p>Tu lenguaje favorito es: {form.lenguaje}</p>
                <select name="lenguaje" onChange={handleChange}>
                    <option value="" defaultValue>-----</option>
                    <option value="js">JS</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="c++">C++</option>
                    <option value="go">Go</option>
                </select>

                <br/>

                <label htmlFor="terminos">Acepto términos y condicones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} />

                <input type="submit" />
            </form>
        </>
    );
}