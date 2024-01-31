export const Mute = ({mute, setMute}) => {
    const muteIcon = mute ? 'unmute' : 'mute'

    const handleClick = () => {
        setMute(!mute)
    }

    return (
        <div id='botonMute'>
            <img src={`src/assets/img/${muteIcon}.svg`} onClick={handleClick}></img>
        </div>
    )
}