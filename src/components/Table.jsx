import { useState, useEffect } from 'react'

const clickAudio = new Audio('src/assets/sounds/click.wav')
const aciertoAudio = new Audio('src/assets/sounds/acierto.wav')
const errorAudio = new Audio('src/assets/sounds/error.wav')

export const Table = ({setCount, setHits, setStarTimer, board, mute, reset, setReset }) => {

    const [selected, setSelected] = useState([])
    const [guessed, setGuessed] = useState([])

    useEffect(() => {
      if (reset) {
        setSelected([])
        setGuessed([])
        setReset(false)
      }
    },[reset])

    useEffect(() => {
      if (guessed.includes(selected[0])){
        setSelected([])
      } else {
        if (selected.length == 1){
          setStarTimer(true)
          mute && clickAudio.play()
        }
        if (selected.length == 2) {
          if (selected[0].split('|')[1] == selected[1].split('|')[1]) {
            setGuessed(guessed => [...guessed, ...selected])
          } else {
            mute && errorAudio.play()
          }
          setTimeout(() => setSelected([]), 300)
        }
      }
    },[selected])

    useEffect(() => {
      if(guessed.length > 0){
        setHits(prev => prev + 1)
        mute && aciertoAudio.play()
      }
    },[guessed])
    
    return (
        <section className="table">     
        {
          board.map((img) => {
            const numberImg = img.split('|')[1]
            return (
                <button 
                  key={img} 
                  onClick ={() => { 
                    setSelected(selected => [...selected, img])
                    setCount(prev=> prev + 1)
                  }}
                >
                  {selected.includes(img) || guessed.includes(img) ? <img src={`src/assets/img/${numberImg}.webp`}></img> : ''}
                </button>
            )
          })
        }
        </section>
    )
}