import React from "react";

import './Button.css'

const Button = (props) => {
    return (
        <a
            href={props.link}
            className="Button"
            target="_blank"
            rel="noreferrer">
                {props.title}
        </a>
    )
}

export default Button