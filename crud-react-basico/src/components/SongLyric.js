import React from 'react'

const SongLyric = ({title, lyrics}) => {
    return (
        <div>
            <h3>{title}</h3>
            {/* whiteSpace -> para que haga los saltos de linea */}
            <blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
        </div>
    )
}

export default SongLyric
