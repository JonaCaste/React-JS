import React, { useState, useEffect } from 'react';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { HelpHttp } from '../helpers/HelpHttp';
import Loader from './Loader';
import SonDetails from './SongDetails';
import SongForm from './SongForm';
import Error404 from "../pages/Error404";
import SongTable from './SongTable';
import SongPage from '../pages/SongPage';

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mySongs, setMySongs] = useState(mySongsInit);

    useEffect(() => {
        //evitamos renderizados innecesarios
        if(search === null) return;

        //recordemos que volver el efecto async es un antipatron
        const fetchData= async () => {
            const {artist, song} = search;

            let artistUrl = `https:www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            setLoading(true);

            /* Hacemos esto para que el objeco constructo Promise nos devuelva las peticiones
            fetch cuando ambas se resuelvan */
            const [artistRes, songRes] = await Promise.all([
                HelpHttp().get(artistUrl), 
                HelpHttp().get(songUrl)
            ]);

            setBio(artistRes);
            setLyric(songRes);

            setLoading(false);
        }
        fetchData();

        localStorage.setItem("mySongs", JSON.stringify(mySongs));

    }, [search, mySongs]);

    const handleSearch = data => {
        setSearch(data)
    }

    const handleSaveSong = () => {
        alert("Guardando canción en favoritas");
        let currentSong = {
            search,
            lyric,
            bio
        }

        let songs = [...mySongs, currentSong];

        //estado en react es async
        setMySongs(songs);
        setSearch(null);

        localStorage.setItem("mySongs", JSON.stringify(songs));
    }

    const handleDeleteSong = (id) => {
        let isDelete = window.confirm(`Esta seguro de eliminar la canción con el id: ${id}`);

        if(isDelete){
            let songs = mySongs.filter((el, index) => index !== id);
            setMySongs(songs);
            localStorage.setItem("mySongs", JSON.stringify(songs));
        }
    }

    return (
        <>

            <HashRouter>
                <header>
                    <h2>Song Search con rutas</h2>
                    <Link to="/" >Home</Link>
                </header>

                {loading && <Loader />}

                <div className='grid-1-2'>
                    <Routes>
                        <Route strict path="/" element={
                            <>
                                <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong} />
                                <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
                                {search && !loading && <SonDetails search={search} lyric={lyric} bio={bio} />}      
                            </>
                        } />    
                        <Route path="/:id" element={<SongPage mySongs={mySongs} />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    )
}

export default SongSearch
