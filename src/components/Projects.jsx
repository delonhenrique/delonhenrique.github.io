import React from "react";

import './Projects.css'

import Button from "./Button";

const Projects = (props) => {
    return (
        <div className="card inLine">
            <Button title="Jump Game"
                link="https://delonhenrique.github.io/jump-game/" />
            <Button title="Hooks - React" link="https://delonhenrique.github.io/hooks-react/" />
        </div>
    )
}

export default Projects

