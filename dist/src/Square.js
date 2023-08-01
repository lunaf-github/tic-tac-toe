var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Square_instances, _Square_build, _Square_updateButtonHandler, _Square_getValue;
class Square {
    constructor(parentNode, value, player) {
        _Square_instances.add(this);
        this.square = null;
        this.parent = parentNode;
        this.currentPlayer = player;
        __classPrivateFieldGet(this, _Square_instances, "m", _Square_build).call(this);
    }
}
_Square_instances = new WeakSet(), _Square_build = function _Square_build() {
    // create
    this.square = document.createElement('button');
    // add attibutes
    this.square.className = 'board__square';
    this.square.setAttribute('type', 'button');
    // add text
    this.square.textContent = '';
    // add event listeners
    this.square.addEventListener('click', () => __classPrivateFieldGet(this, _Square_instances, "m", _Square_updateButtonHandler).bind(this));
    // append to DOM
}, _Square_updateButtonHandler = function _Square_updateButtonHandler(e) {
    if (this.square) {
        this.square.textContent = this.currentPlayer.current;
    }
}, _Square_getValue = function _Square_getValue() {
    return this.currentPlayer.current;
};
export default Square;
