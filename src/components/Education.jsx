import React from "react";

const Education = (props) => {
    return (
        <div className="center card">
            <h3 className="card-title"><strong>{props.title}</strong></h3>
            <p><strong>Instituição: </strong>{props.institution}</p>
            <p><strong>Situação: </strong>{props.status}</p>
            <p><strong>Tempo de curso: </strong>{props.time}</p>
        </div>
    )
}

export default Education