'use client'

import Header from "./components/header/page";
import "./style/style.css";
import ListaAlunos from './components/listaAlunos/page';

import { Aluno } from '../types/types'; 
import { useState } from "react";

export default function Home() {

  const [listaAlunos, setListaAlunos] = useState<Aluno[]>([]);

  const melhoresAlunos = listaAlunos.filter((aluno) => aluno.mediaAlta);
  const alunosBaixaFrequencia = listaAlunos.filter((aluno) => aluno.frequenciaBaixa);

  return (
    <>
      <Header />
      <main className="container">
        <h1>Diário de Notas</h1>

        <section className="infoTurma">
          <div className="infoTurma__media">
            <h2>Melhores Alunos</h2>
            {melhoresAlunos.length > 0 ? (
              <ul>
                {melhoresAlunos.map((aluno) => (
                  <li key={aluno.id}>{aluno.nome}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhum aluno com média alta.</p>
            )}
          </div>

          <div className="infoTurma__alunos">
            <h2>Alunos com Baixa Frequência</h2>
            {alunosBaixaFrequencia.length > 0 ? (
              <ul>
                {alunosBaixaFrequencia.map((aluno) => (
                  <li key={aluno.id}>{aluno.nome}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhum aluno com baixa frequência.</p>
            )}
          </div>
        </section>

        <ListaAlunos listaAlunos={listaAlunos} setListaAlunos={setListaAlunos} />
      </main>
    </>
  );
}
