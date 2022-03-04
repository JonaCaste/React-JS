import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

//Lo dejamos fuera del componente ya que una inicializacion "falsa" no hace parte del componente
const initialDB = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    },
]

const CrudApp = () => {

    const [db, setDb] = useState(initialDB);
    //variable para controlar los datos a editar
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = db[db.length-1].id + 1;
        setDb([...db, data])
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData)
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Está seguro de eliminar el registro con el id ${id}?`);
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }
    }


    return (
        <div>
            <h2>CRUD App</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />
            </article>
        </div>
    )
}

export default CrudApp;
