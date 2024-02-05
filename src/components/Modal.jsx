export const Modal = ({ hits, time, count, resetGame }) => {
    const resultadoPartida = hits == 8? 'Ganaste' : 'Perdiste'
    const imgGanador = <img src="src/assets/img/win.png" alt="imagen de Mario y Luigi"></img> 
    const imgPerdedor = <img src="src/assets/img/lose.png" alt="imagen de Bowser"></img>
    const imagenModal = hits == 8? imgGanador : imgPerdedor
    const info = hits == 8? <h4>Solo demoraste {30-time} segundos</h4> : <h4>aciertos: {hits} aciertos</h4>

    return (
        <>
            <div className="modal_container">
                <h2>{resultadoPartida}</h2>
                { imagenModal }
                { info }
                <h4>movimientos: {count} movimientos</h4>
                <a href="#" className="modalReiniciar" onClick= {resetGame}>reiniciar juego</a>
            </div>
        </>
    )
}