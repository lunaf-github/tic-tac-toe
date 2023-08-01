import BoardController from "./BoardController";
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
console.log(BoardController.clearBoard);
// persistent DOM nodes
const gameBoardContainer = document.querySelector('.game-board');
const scoreBoard = document.querySelector('.score-board');
const playerXScore = document.querySelector('.score-board__x');
const playerOScore = document.querySelector('.score-board__o');
const gameControls = document.querySelector('.controls');
const statusBoard = document.querySelector('.status-board');
const symbolSelector = document.querySelector('game-board__xy-selector');
function changePlayer(state) {
    if (state.player === 'X') {
        state.player = 'O';
    }
    else {
        state.player = 'X';
    }
}
