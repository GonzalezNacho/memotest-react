export const BotonChangeState = ({condicion, setCondicion, options}) => {
    const icon = condicion ? options[0] : options[1]

    const handleClick = () => {
        setCondicion(!condicion)
    }

    return (
        <div id='botonMute'>
            <img src={`src/assets/img/${icon}.svg`} onClick={handleClick}></img>
        </div>
    )
}