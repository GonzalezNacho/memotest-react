import { useState } from 'react'
import './App.css'
import { Table } from './components/Table'
import { Modal } from './components/Modal'
import { PauseModal } from './components/PauseModal'
import { BotonChangeState } from './components/BotonChangeState'
import { mezclarArray } from "./logic/board"
import { useTimer } from './hooks/useTimer'

function App() {
  
  const [count, setCount] = useState(0)
  const [board, setBoard] = useState(mezclarArray)
  const [mute, setMute] = useState(true)
  const [play, setPlay] = useState(true)
  const {hits, setHits, time, setTime, setStarTimer, finish, setFinish} = useTimer({mute, play})
  
  const resetGame = () => {
    setFinish(false)
    setStarTimer(false)
    setTime(30)
    setCount(0)
    setHits(0)
    setBoard(mezclarArray)
  }

  return (
    <>
      <main>
        <section className="section1">
          <h1> memotest</h1>
          <Table setCount={setCount} setHits={setHits} setStarTimer={setStarTimer} board={board} mute={mute}></Table>
        </section>
        <section className="section2">
          <div>
            <h2 className="estadisticas">Aciertos: {hits}</h2>
            <h2 className="estadisticas">Tiempo: {time} segundos</h2>
            <h2 className="estadisticas">Movimientos: {count}</h2>
          </div>
          <div id='botonera'>
            <button onClick={resetGame} id='reset'>reiniciar Juego</button>
            <BotonChangeState condicion={mute} setCondicion={setMute} options={['unmute','mute']} />
            <BotonChangeState condicion={play} setCondicion={setPlay} options={['pause','play']} />
          </div>
        </section>
        
        <section>
          <Modal hits={hits} time ={time} count={count} resetGame={resetGame} finish={finish}></Modal>
        </section>
        <section>
          <PauseModal hits={hits} time ={time} count={count} resetGame={resetGame} play={play} setPlay={setPlay}></PauseModal>
        </section>
      </main>
      <footer>
        <p>Desarrollado por <a href="https://github.com/GonzalezNacho" rel='noreferrer' target="_blank">González Ignacio</a></p>
      </footer>
    </>
  )
}

export default App