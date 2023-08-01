export type Player = {
    current: string;
};

export type State = {
    player: string;
    board: string[];
    score: {x: number, o:number};
    winningCombos: number[][];
}