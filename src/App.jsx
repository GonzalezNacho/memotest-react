import { useState } from 'react'
import './App.css'
import { Table } from './components/Table'
import { Modal } from './components/Modal'
import { mezclarArray } from "./logic/board"
import { useTimer } from './hooks/useTimer'



function App() {
  
  const [count, setCount] = useState(0)
  const [board, setBoard] = useState(mezclarArray)
  const [boardImg, setBoardImg] = useState(Array(16).fill(null))
  const {hits, setHits, time, setTime, setStarTimer, finish, setFinish} = useTimer()
  const modal = finish ? 'modal--show': ''
  
  const resetGame = () => {
    setFinish(false)
    setStarTimer(false)
    setTime(30)
    setCount(0)
    setHits(0)
    setBoardImg(Array(16).fill(null))
    setBoard(mezclarArray)
  }

  return (
    <>
      <main>
        <section className="section1">
            <h1> memotest</h1>
            <Table count={count} setCount={setCount} hits={hits} setHits={setHits} setStarTimer={setStarTimer} board={board} boardImg={boardImg} setBoardImg={setBoardImg}></Table>
        </section>
        <section className="section2">
            <div>
              <h2 className="estadisticas">Aciertos: {hits}</h2>
              <h2 className="estadisticas">Tiempo: {time} segundos</h2>
              <h2 className="estadisticas">Movimientos: {Math.floor(count/2)}</h2>
            </div>
            <button onClick={resetGame} id='reset'>reiniciar Juego</button>
        </section>
        
        <section className={`modal ${modal}`}>
          <Modal hits={hits} time ={time} count={count} resetGame={resetGame}></Modal>
        </section>
    </main>
    
    <footer>
        <p>Desarrollado por <a href="https://gonzalez-ignacio.netlify.app/" rel='noreferrer' target="_blank">González Ignacio</a></p>
    </footer>
    </>
  )
}

export default App
