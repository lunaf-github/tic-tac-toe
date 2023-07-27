import { Player } from '../constants/types';

class Square {
    square: HTMLButtonElement | null = null;
    parent: Node | Element;
    currentPlayer: Player;

    constructor(parentNode: Node | Element, value: string, player: Player) {
        this.parent = parentNode;
        this.currentPlayer = player;
        this.#build()
    }
    
    #build() {
        // create
        this.square = document.createElement('button');
        // add attibutes
        this.square.className = 'board__square';
        this.square.setAttribute('type', 'button');
        // add text
        this.square.textContent = '';
        // add event listeners
        this.square.addEventListener('click', () => this.#updateButtonHandler.bind(this));
        // append to DOM
    }

    #updateButtonHandler(e: Event) {
        if (this.square) {
            this.square.textContent = this.currentPlayer.current;
        }
    }

    #getValue() {
        return this.currentPlayer.current;
    }
}


export default Square;