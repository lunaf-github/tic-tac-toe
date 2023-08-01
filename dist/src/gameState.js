const state = {
    player: 'X',
    board: ['', '', '', '', '', '', '', '', ''],
    score: { x: 0, o: 0 },
    winningCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ],
};
export function getCurrentPlayer() {
    return state.player;
}
export function setCurrentPlayer() {
    (state.player === 'X') ? state.player = 'O' : state.player = 'X';
}
export function getWinningCombos() {
    return [...state.winningCombos];
}
export function getScores() {
    return Object.assign({}, state.score);
}
