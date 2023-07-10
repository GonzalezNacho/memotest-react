import { useState } from 'react'
import { Square } from "./Square"




export const Table = ({ count, setCount, hits, setHits, setStarTimer, board, boardImg, setBoardImg }) => {
    
    const [imgAnt, setImgAnt] = useState(0)
    const [indexImgAnt, setIndexImgAnt] = useState(0)
           

    return (
        <section className="table">
            
        {
          board.map((img, index) => {
            return (
                <Square 
                    key={index} 
                    img={img} 
                    index={index}
                    setCount={setCount}
                    count = {count}
                    setImgAnt={setImgAnt}
                    imgAnt = {imgAnt}
                    hits = {hits}
                    setHits = {setHits}
                    setStarTimer ={setStarTimer}
                    indexImgAnt ={indexImgAnt}
                    setIndexImgAnt = {setIndexImgAnt}
                    boardImg = {boardImg}
                    setBoardImg = {setBoardImg}
                >
                  {boardImg[index] ? <img src={`src/assets/img/${img}.png`}></img> : ''}
                </Square>
            )
          })
        }

        </section>
    )
}