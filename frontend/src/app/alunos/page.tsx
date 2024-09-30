import Image from "next/image";
import Header from "../components/header/page";

import "./style.css";

export const metadata = {
  title: "Alunos | Diario de Notas",
  description: "Alunos do Diario de notas do professor",
};

export default function Alunos() {
  return (
    <>
      <Header />

      <main>
        <p>alunos</p>
      </main>
    </>
  );
}
