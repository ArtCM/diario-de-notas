import Header from "./components/header/page";
import "./style/style.css";
import ListaAlunos from './components/listaAlunos/page';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        
        <ListaAlunos />

      </main>
    </>
  );
}
