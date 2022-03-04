import React, { useState } from 'react';
import SelectList from './SelectList'

const SelectsAnidados = () => {

    const [estado, setEstado] = useState("");
    const [municipios, setMunicipios] = useState("");
    const [colonia, setColonia] = useState("");

    const token = "a537beaa-7839-46ab-a326-2d4cc9ea8d77"

    return (
        <div>
            <h2>Selects Anidados</h2>
            <h3>México</h3>
            <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${token}`}
                handleChange={e => setEstado(e.target.value)} />
            {
                estado &&
                <SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=${token}`} 
                    handleChange={e => setMunicipios(e.target.value)} />
            }
            {
                municipios &&
                <SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${municipios}?token=${token}`} 
                    handleChange={e => setColonia(e.target.value)} />
            }
            <p>{`Estados de React: ${estado} - ${municipios} - ${colonia}`}</p>
        </div>
    )
}

export default SelectsAnidados
