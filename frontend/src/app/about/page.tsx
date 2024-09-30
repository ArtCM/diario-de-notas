import Image from "next/image";
import Header from "../components/header/page";

import "./style.css";

export const metadata = {
  title: "Sobre | Diario de Notas ",
  description: "Sobre o Diario de notas do professor",
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <p>about</p>
      </main>
    </>
  );
}
