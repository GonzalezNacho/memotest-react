import { useState, useEffect } from "react";


export function useTimer({mute}) {

    const [hits, setHits] = useState(0)
    const [time, setTime] = useState(30)
    const [startTimer, setStarTimer] = useState(false)
    const [finish, setFinish] = useState(false)
    const rutaDelSonido = hits == 8 ? 'src/assets/sounds/ganaste.wav' : 'src/assets/sounds/perdiste.wav'
    const sonido = new Audio(rutaDelSonido)
    
    

    useEffect(() => {
        let intervalId = null
        if( startTimer ) {
          intervalId = setInterval(() => {
            setTime(prev => prev -=1)
          },1000)
        } 
        return () => {
          clearInterval(intervalId)
        }
      },[startTimer])
    
      useEffect (() => {
        if (time == 0 || hits == 8) {
          setFinish(true)
          setStarTimer(false)
          mute && sonido.play()
        }
      },[time, hits])
    
    return {hits, setHits, time, setTime, startTimer, setStarTimer, finish, setFinish}
}