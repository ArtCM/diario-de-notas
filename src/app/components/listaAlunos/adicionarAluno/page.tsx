import "./style.css";
import React from 'react';

interface AdicionarAlunoProps {
    buttonText: string;
    buttonColor: string;
    onClick: () => void;
}

export default function AdicionarAluno({ buttonText, buttonColor, onClick }: AdicionarAlunoProps) {
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
}