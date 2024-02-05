export const BotonChangeState = ({condicion, setCondicion, option1, option2}) => {
    const icon = condicion ? option1 : option2

    const handleClick = () => {
        setCondicion(!condicion)
    }

    return (
        <div id='botonMute'>
            <img src={`src/assets/img/${icon}.svg`} onClick={handleClick}></img>
        </div>
    )
}