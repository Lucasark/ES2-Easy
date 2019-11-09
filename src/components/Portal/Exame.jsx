import React, { useState } from "react";
//import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
//import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ExameCadastro from "../Model/ExameCadastro"
import ExameLista from "./ExameLista";

export default props => {

    const [tela, setTela] = useState(1);
    const [exame, setExame] = useState({});

    const handleTela = () =>{
        switch(tela){
            case 1:
                return(<ExameLista handle={setTela} exame={setExame}></ExameLista>)
            case 2:
                return(<ExameCadastro exame={exame}></ExameCadastro>)
        }
    }
    return (
        <div>
            <h2>Exames</h2>
            {handleTela()}
        </div>
    );
}