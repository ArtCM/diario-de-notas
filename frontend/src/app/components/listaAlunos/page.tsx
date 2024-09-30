'use client'

import AdicionarAluno from "./adicionarAluno/page"
import AdicionarAlunoModal from "./modal/page"
import "./style.css"
import { useState } from "react";

export default function ListaAlunos() {
    const [listaAlunos, setListaAlunos] = useState([
        {
            id: 1,
            nome: 'Arthur',
            notas: {
                disciplinaUm: 1,
                disciplinaDois: 2,
                disciplinaTres: 3,
                disciplinaQuatro: 4,
                disciplinaCinco: 5,
            },
            frequencia: 75,
        },
        {
            id: 2,
            nome: 'Laura',
            notas: {
                disciplinaUm: 1,
                disciplinaDois: 2,
                disciplinaTres: 3,
                disciplinaQuatro: 4,
                disciplinaCinco: 5,
            },
            frequencia: 70,
        }
    ]);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleAddStudent = (data: { nome: string; notas: number[]; frequencia: number }) => {
        const newStudent = {
            id: listaAlunos.length + 1,
            nome: data.nome,
            notas: {
                disciplinaUm: data.notas[0],
                disciplinaDois: data.notas[1],
                disciplinaTres: data.notas[2],
                disciplinaQuatro: data.notas[3],
                disciplinaCinco: data.notas[4],
            },
            frequencia: data.frequencia,
        };
        setListaAlunos((prev) => [...prev, newStudent]);
        handleCloseModal();
    };

    const handleRemoveStudent = (id: number) => {
        setListaAlunos((prev) => prev.filter(aluno => aluno.id !== id));
    };

    return(
        <section className="listaAlunos">
            <AdicionarAluno
                buttonText="Adicionar Aluno" 
                buttonColor="var(--green)"
                onClick={handleOpenModal}
            />

            <table className="listaAlunos__lista">
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Disciplina 1</th>
                        <th>Disciplina 2</th>
                        <th>Disciplina 3</th>
                        <th>Disciplina 4</th>
                        <th>Disciplina 5</th>
                        <th>Rendimento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaAlunos.map(aluno => {
                        return (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.notas.disciplinaUm}</td>
                                <td>{aluno.notas.disciplinaDois}</td>
                                <td>{aluno.notas.disciplinaTres}</td>
                                <td>{aluno.notas.disciplinaQuatro}</td>
                                <td>{aluno.notas.disciplinaCinco}</td>
                                <td>{aluno.frequencia}%</td>
                                <td className="delete">
                                    <button onClick={() => handleRemoveStudent(aluno.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <AdicionarAlunoModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onSubmit={handleAddStudent} 
            />
        </section>
    )
}