'use client'

import { AdicionarAlunoProps } from "@/types/types";
import "./style.css";
import React from 'react';

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