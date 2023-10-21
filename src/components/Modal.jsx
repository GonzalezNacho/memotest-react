export const Modal = ({ hits, time, count, resetGame }) => {
    const ganaste = hits == 8
    const rutaImagenes = 'src/assets/img/'
    const imagenAMostrar = ganaste ? 'win.png' : 'lose.png'
    const altImagen = ganaste ? 'imagen de Mario y Luigi' : 'imagen de Bowser'
    const resultadoPartida = ganaste? 'Ganaste' : 'Perdiste'
    const info = ganaste? <h4>Solo demoraste {30-time} segundos</h4> : <h4>aciertos: {hits} aciertos</h4>

    return (
        <>
            <div className="modal_container">
                <h2>{resultadoPartida}</h2>
                <img src={rutaImagenes + imagenAMostrar} alt={altImagen}></img>
                { info }
                <h4>movimientos: {count} movimientos</h4>
                <a href="#" className="modalReiniciar" onClick= {resetGame}>reiniciar juego</a>
            </div>
        </>
    )
}