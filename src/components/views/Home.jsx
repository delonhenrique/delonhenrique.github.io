import React from "react";

import './Home.css'

import profilePicture from '../../images/profile-pic.png'
import ProfessionalExp from "../ProfessionalExp";
import SectionTitle from "../SectionTitle";

const Home = (props) => {
    return (
        <div className="mainHome">
            <div className="center">
                <div className="div-picture">
                    <img src={profilePicture} alt="" className="profile-picture" />
                </div>
            </div>
            <h1 className="name">Delon Henrique</h1>
            <h2 className="job">Desenvolvedor</h2>
            <SectionTitle title="EXPERIÊNCIA PROFISSIONAL" />
            <ProfessionalExp 
                title="Docente - Técnico em Mecatrônica"
                time="5 anos"
                description="Algumas das disciplinas lecionadas: Lógica de programação, Eletrônica Digital, Eletropneumática, CLP (Controlador Lógico Programável)."/>
            <ProfessionalExp
                title="Professor Coordenador"
                time="6 meses"
                description="Atuei como professor coordenador no núcleo pedagógico da Diretoria de Ensino de Sorocaba na área de Tecnologia Educacional, responsável pelas técnologias digitais de informação e comunicação."/>
            <ProfessionalExp
                title="Professor de apoio à tecnologia e inovação"
                time="1 ano - Função atual"
                description="Atuo como professor de apoio a tecnolgia e inovação em uma unidade escolar estadual de Sorocaba." />
            <ProfessionalExp
                title="Docente - Física / Matemática"
                time="13 anos"
                description="Atuo como docente na área de exatas desde 2009."/>
        </div>
    )
}

export default Home