import { BotonChangeState } from "./BotonChangeState"

export const PauseModal = ({ hits, time, count, resetGame, play, setPlay }) => {
    const resultadoPartida = 'Pausa'
    const imagenModal = <img src="src/assets/img/sleep.png" alt="imagen de Mario y Luigi"></img>
    const info = <h4>aciertos: {hits} aciertos</h4>

    return (
        <>
            <div className="modal_container">
                <h2>{resultadoPartida}</h2>
                { imagenModal }
                { info }
                <h4>movimientos: {count} movimientos</h4>
                <h4>Tiempo restante: {30-time} segundos</h4>
                <BotonChangeState condicion={play} setCondicion={setPlay} option1={'pause'} option2={'play'} /> 
                <a href="#" className="modalReiniciar" onClick= {resetGame}>reiniciar juego</a>
            </div>
        </>
    )
}