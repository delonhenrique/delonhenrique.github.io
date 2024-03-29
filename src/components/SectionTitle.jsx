import React from "react";

import './SectionTitle.css'

const SectionTitle = (props) => {
    return (
        <div className="center SectionTitle">
            <h1>{props.title}</h1>
        </div>
    )
}

export default SectionTitle