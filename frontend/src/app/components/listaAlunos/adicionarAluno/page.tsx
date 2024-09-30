'use client'

import "./style.css"

import React from 'react';

interface AdicionarAlunoProps {
    buttonText: string;
    buttonColor: string;
    onClick: () => void;
}

const AdicionarAluno: React.FC<AdicionarAlunoProps> = ({ buttonText, buttonColor, onClick }) => {
    return (
        <div className="flex flex-end listaAlunos__AddButton">
            <button 
                onClick={onClick} 
                style={{ backgroundColor: buttonColor }} 
                className="adicionar-aluno-button"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default AdicionarAluno;