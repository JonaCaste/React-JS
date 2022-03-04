import React, { useState, useEffect } from 'react';
import { HelpHttp } from '../helpers/HelpHttp';
import Loader from './Loader';
import SonDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

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

    }, [search]);

    const handleSearch = data => {
        setSearch(data)
    }

    return (
        <>
            <h2>Song Search</h2>
            <div className='grid-1-3'>
                {loading && <Loader />}
                <SongForm handleSearch={handleSearch} />
                {search && !loading && <SonDetails search={search} lyric={lyric} bio={bio} />}
            </div>
        </>
    )
}

export default SongSearch
