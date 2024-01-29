export const Square = ({img, imgAnt, setImgAnt ,count, setCount, hits, setHits, setStarTimer, setIndexImgAnt, indexImgAnt, index, boardImg, setBoardImg, mute, children }) => {

    const clickAudio = new Audio('src/assets/sounds/click.wav')
    const aciertoAudio = new Audio('src/assets/sounds/acierto.wav')
    const errorAudio = new Audio('src/assets/sounds/error.wav')

    const handleClick = () => {
      const newBoardImg = [...boardImg]
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
        mute && clickAudio.play()
      } else {
        if (newImg == newImgAnt) {
          const newHits = hits +1
          setHits(newHits)
          setBoardImg(newBoardImg)
          mute && aciertoAudio.play()
        } else {
          mute && errorAudio.play()
          setTimeout(() => {
            newBoardImg[index] = null
            newBoardImg[indexImgAnt] = null
            setBoardImg(newBoardImg)
          }, 300)
        }
      }
    }

    
    return (
      <button onClick={handleClick}>
        {children}
      </button>
    )
}