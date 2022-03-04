import React from 'react'

const Message = ({msg, bgColor}) => {

    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        tectAlign: "center",
        color: "#fff",
        fontWeidht: "bold",
        backgroundColor: bgColor,

    }

    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}

export default Message
