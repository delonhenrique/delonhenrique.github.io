import React from "react";

import './ProfessionalExp.css'

const ProfessionalExp = (props) => {
    return (
        <div className="center professional">
            <h3><strong>{props.title}</strong></h3>
            <p><strong>Período: </strong>{props.time}</p>
            <p><strong>Descrição: </strong>{props.description}</p>
        </div>
    )
}

export default ProfessionalExp