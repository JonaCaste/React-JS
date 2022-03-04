import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';
import Message from "./Message";

const SongDetails = ({search, lyric, bio}) => {

    // Para evitar renderizados innecesarios
    if(!lyric || !bio) return null;

    return (
        <>
            {/* lyric.name viene de Abort.controller */}
            {lyric.error || lyric.err || lyric.name === "AbortError" 
                ? 
            <Message msg={`Error: no existe la canción ${search.lyric}`} bgColor="#dc3545" /> 
                : 
            <SongLyric title={search.song} lyrics={lyric.lyrics} />}

            {bio.artists
                ? 
            <SongArtist artist={bio.artists[0]} /> 
                : 
            <Message msg={`Error: no existe el interprete ${search.artist}`} bgColor="#dc3545" />}
        </>
    )
}

export default SongDetails
