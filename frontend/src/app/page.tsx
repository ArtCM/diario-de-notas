import Header from "./components/header/page";
import "./style/style.css";
import ListaAlunos from './components/listaAlunos/page';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">

        <h1>Diario de Notas</h1>

        <section className="infoTurma">
          <div className="infoTurma__media">
            <h2>Melhores Alunos</h2>
            
          </div>
          <div className="infoTurma__alunos">
            <h2>Alunos com Baixa Frequencia</h2>

          </div>
        </section>
        
        <ListaAlunos />

      </main>
    </>
  );
}
