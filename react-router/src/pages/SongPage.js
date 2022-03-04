import React from 'react'
import { useParams } from 'react-router-dom'
import SongDetails from '../components/SongDetails'

const SongPage = ({mySongs}) => {

    let {id} = useParams();
    //Current Song
    let {search, lyric, bio} = mySongs[id];

    return (
        <SongDetails search={search} lyric={lyric} bio={bio} />
    )
}

export default SongPage;