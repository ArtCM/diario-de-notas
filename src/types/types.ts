export interface Aluno {
    id: number;
    nome: string;
    notas: {
      disciplinaUm: number;
      disciplinaDois: number;
      disciplinaTres: number;
      disciplinaQuatro: number;
      disciplinaCinco: number;
    };
    frequencia: number;
    mediaAlta: boolean;
    frequenciaBaixa: boolean;
  }

export interface AdicionarAlunoProps {
  buttonText: string,
  buttonColor: string,
  onClick: () => void
}
