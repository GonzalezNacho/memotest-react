export const mezclarArray = () => {
    const board = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    if(board[0]==1 && board[1]==1) {
        for (let i = board.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [board[i], board[j]] = [board[j], board[i]];
        }
        return board
    }    
}
