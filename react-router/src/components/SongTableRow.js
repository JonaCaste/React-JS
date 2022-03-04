import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongTableRow = ({song, id, handleDeleteSong}) => {

    let navigate = useNavigate();
    let {bio, search} = song;
    let avatar = bio.artists[0].strArtistThumb;

    let avatarStyles = {
      width: "auto",
      height: "40px",
    }

  return (
    <tr>
        <td>
            <img src={avatar} alt={search.artists} style={avatarStyles} />
        </td>
        <td>{search.artists}</td>
        <td>{search.song}</td>
        <td>
            <button onClick={() => navigate(`/${id}`)}>Ver</button>
            <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default SongTableRow