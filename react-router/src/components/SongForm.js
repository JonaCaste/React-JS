import React, { useState } from 'react';

const initialForm = {
    artist: "",
    song: "",
};

const SongForm = ({handleSearch, handleSaveSong}) => {

    const [form, setForm] = useState(initialForm);
    const [isDisable, setIsDisable] = useState(true);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos");
            setIsDisable(true);
            return;
        }

        handleSearch(form);
        setForm(initialForm);
        setIsDisable(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" placeholder="Nombre del interprete" 
                    value={form.artist} onChange={handleChange} />
                <input type="text" name="song" placeholder="Nombre de la canción" 
                    value={form.song} onChange={handleChange} />
                <input type="submit" value="Enviar" />
                <input type="button" value="Guardar" onClick={handleSaveSong} disabled={isDisable && "disable"} />
            </form>
        </>
    )
}

export default SongForm
