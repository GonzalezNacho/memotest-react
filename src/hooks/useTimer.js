import { useState, useEffect } from "react";


export function useTimer({mute,play}) {

    const [hits, setHits] = useState(0)
    const [time, setTime] = useState(30)
    const [startTimer, setStarTimer] = useState(false)
    const [finish, setFinish] = useState(false) 

    useEffect(() => {
        let intervalId = null
        if( startTimer ) {
          intervalId = setInterval(() => {
            if (play) {
              setTime(prev => prev -=1)
            }
          },1000)
        } 
        return () => {
          clearInterval(intervalId)
        }
      },[startTimer, play])
    
    useEffect (() => {
      if (time == 0 || hits == 8) {
        const rutaDelSonido = hits == 8 ? 'src/assets/sounds/ganaste.wav' : 'src/assets/sounds/perdiste.wav'
        const sonido = new Audio(rutaDelSonido)
        setFinish(true)
        setStarTimer(false)
        mute && sonido.play()
      }
    },[time, hits])
    
    return {hits, setHits, time, setTime, startTimer, setStarTimer, finish, setFinish}
}