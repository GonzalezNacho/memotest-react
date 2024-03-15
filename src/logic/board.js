export const mezclarArray = () => {
    const board = [
        'a|1', 'b|1', 'a|2',
        'b|2', 'a|3', 'b|3',
        'a|4', 'b|4', 'a|5',
        'b|5', 'a|6', 'b|6',
        'a|7', 'b|7', 'a|8',
        'b|8'
    ]
    for (let i = board.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }
    return board
}
