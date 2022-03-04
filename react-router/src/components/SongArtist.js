import React from 'react'

const SongArtist = ({artist}) => {
    return (
        <div>
            <h2>{artist.strArtist}</h2>
            <img src={artist.strArtistThumb} alt={artist.strArtist} />
            <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Sitio Web Oficial</a>
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <p>{artist.strBiographyEN}</p>
        </div>
    )
}

export default SongArtist
