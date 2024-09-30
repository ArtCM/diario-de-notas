import "./style.css"

export default function AdicionarAluno({buttonText, buttonColor}) {
    return(
        <div className="flex flex-end listaAlunos__AddButton">
            <button style={{ backgroundColor: buttonColor }}>
                {buttonText}
            </button>
        </div>
    )
}