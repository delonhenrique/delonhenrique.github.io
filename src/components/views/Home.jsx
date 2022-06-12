import React from "react";

import './Home.css'

import profilePicture from '../../images/profile-pic.png'

const Home = (props) => {
    return (
        <div className="mainHome">
            <div className="div-picture">
                <img src={profilePicture} alt="" className="profile-picture" />
            </div>
            <h1>Delon Henrique</h1>
            <h2>Desenvolvedor</h2>
            <h4>Experência profissional</h4>
            <h5>Docente e coordenador - Técnico em Mecatrônica</h5>
            <p><strong>Período:</strong> 5 anos</p>
            <p>Algumas das disciplinas lecionadas:
                Lógica de programação
                Eletrônica Digital
                Eletropneumática
                CLP (Controlador Lógico Programável)
            </p>
        </div>
    )
}

export default Home