import React from "react";

const ProfessionalExp = (props) => {
    return (
        <div className="center card">
            <h3 className="card-title"><strong>{props.title}</strong></h3>
            <p><strong>Período: </strong>{props.time}</p>
            <p><strong>Descrição: </strong>{props.description}</p>
        </div>
    )
}

export default ProfessionalExp