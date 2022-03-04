import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import { HelpHttp } from '../helpers/HelpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';
import Error404 from "../pages/Error404";

const CrudApi = () => {

    const [db, setDb] = useState(null);
    //variable para controlar los datos a editar
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let url = "http://localhost:5000/santos";

    useEffect(() => {
        setLoading(true);

        HelpHttp().get(url).then(res => {
            if(!res.err) {
                setDb(res);
                setError(null);
            }
            else {
                setDb(null);
                setError(res);
            }
        });

        setLoading(false);
    }, [url]);

    const createData = (data) => {
        data.id = db[db.length-1].id + 1;

        let options = {
            body: data,
            //headers de la api de json-server
            headers: {"content-type": "application/json"},
        }

        HelpHttp().post(url, options).then(res => {
            if(!res.err) {
                setDb([...db, res]);
            }
            else {
                setError(res);
            }
        });

        setDb([...db, data]);
        setError(null);
    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;

        let options = {
            body: data,
            //headers de la api de json-server
            headers: {"content-type": "application/json"},
        }

        HelpHttp().put(endpoint, options).then(res => {
            if(!res.err) {
                let newData = db.map(el => el.id === data.id ? data : el);
                setDb(newData);
            }
            else {
                setError(res);
            }
        });

        setDb([...db, data]);
        setError(null);
    }

    const deleteData = (id) => {

        let isDelete = window.confirm(`¿Está seguro de eliminar el registro con el id ${id}?`);

        if(isDelete){

            let endpoint = `${url}/${id}`;

            let options = {
                //headers de la api de json-server
                headers: {"content-type": "application/json"},
            }

            HelpHttp().del(endpoint, options).then(res => {
                if(!res.err) {
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData);
                }
                else {
                    setError(res);
                }
            });

            setError(null);

        }
        else return;
    }


    return (
        <div>
            <HashRouter>
                <header>
                    <h2>Crud Api con rutas</h2>
                    <nav>
                        <NavLink to="/" activeClassName="active">Santos</NavLink>
                        <NavLink to="/agregar" activeClassName="active">Agregar</NavLink>
                    </nav>
                </header>

                <article className="grid-1-2">
                    <Routes>
                        <Route strict path="/" element={
                            <>
                            {/* Render condicional */}
                            {loading && <Loader />}
                            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
                            {db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />}
                            </>
                        } />
                        <Route strict path="/agregar" element={
                            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                        } />
                        <Route strict path="/editar/:id" element={ 
                            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                        } />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </article>
            </HashRouter>
        </div>
    )
}

export default CrudApi
