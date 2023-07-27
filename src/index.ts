import { State } from "../constants/types";

const state: State = {
    player: 'X',
    board: [['','',''],['','',''],['','','']],
    score: {x: 0, o: 0}
}

// winners
// r0c0, r1c0, r2c0
// r0c1, r1c1, r2c1
// r0c2, r1c2, r2c2
// r0c0, r0c1, r0c2
// r1c0, r1c1, r1c2
// r2c0, r2c1, r2c2
// r0c0, r1c1, r2c2
// r2c0, r1c1, r0c2

// persistent DOM nodes
const gameBoardContainer = document.querySelector('.game-board');
const playerXScore = document.querySelector('.score-board__x');
const playerOScore = document.querySelector('.score-board__o');
const gameControls = document.querySelector('.controls');
const statusBoard = document.querySelector('.status-board');






function changePlayer(state: State) {
    if (state.player === 'X') {
        state.player = 'O';
    } else {
        state.player = 'X'
    }
}


