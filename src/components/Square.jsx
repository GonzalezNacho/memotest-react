import { useState } from "react"
import debounce from 'just-debounce-it'

export const Square = ({img, imgAnt, setImgAnt ,count, setCount, hits, setHits, setStarTimer, setIndexImgAnt, indexImgAnt, index, boardImg, setBoardImg, children }) => {

    const [handleClickRunning, setHandleClickRunning] = useState(false) 

    const comparacion = (newBoardImg) => {
      setHandleClickRunning(true)
      const newCount = count +1
      const newImg = img
      const newImgAnt = imgAnt
      setCount(newCount)
      if( newCount == 1) {
        setStarTimer(true)
      }

      
      newBoardImg[index] = true
      setBoardImg(newBoardImg)
      if(newCount % 2 ==1) {
        setImgAnt(newImg)
        setIndexImgAnt(index)
        console.log('dentro del movimiento impar')
        
      } else {
        if (newImg == newImgAnt) {
          console.log('dentro del movimiento par, acierto')
          const newHits = hits +1
          setHits(newHits)
        } else {
          console.log('dentro del movimiento par, error')
          setTimeout(() => {
            console.log('dentro del timeout')
            newBoardImg[index] = null
            newBoardImg[indexImgAnt] = null
          }, 300)
          console.log('termina el timeout')
        }
      }
      setBoardImg(newBoardImg)
      console.log('termina el handleclick')
    }

    const handleClick = () => {
      const newBoardImg = [...boardImg]
      if (handleClickRunning) {
        setBoardImg(newBoardImg)
        setHandleClickRunning(false)
      }
      comparacion(newBoardImg)
    }

    return (
      <button onClick={handleClick}>
        {children}
      </button>
    )
}