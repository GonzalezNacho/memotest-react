export const Modal = ({ hits, time, count, resetGame, finish }) => {
    if (!finish) return null
    const resultadoPartida = hits == 8? 'Ganaste' : 'Perdiste'
    const imgGanador = <img src="src/assets/img/win.webp" alt="imagen de Mario y Luigi"></img> 
    const imgPerdedor = <img src="src/assets/img/lose.webp" alt="imagen de Bowser"></img>
    const imagenModal = hits == 8? imgGanador : imgPerdedor
    const info = hits == 8? <h4>Solo demoraste {30-time} segundos</h4> : <h4>aciertos: {hits} aciertos</h4>

    return (
        <section className='modal'>
            <div className="modal_container">
                <h2>{resultadoPartida}</h2>
                { imagenModal }
                { info }
                <h4>movimientos: {count} movimientos</h4>
                <a className="modalReiniciar" onClick= {resetGame}>reiniciar juego</a>
            </div>
        </section>
    )
}