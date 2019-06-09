export default class Money {
    constructor(everyCash) {
        this.everyCash = everyCash;
    }
    calcCash() {
        return this.everyCash.reduce((a, b) => a + b, 0);
    }
}