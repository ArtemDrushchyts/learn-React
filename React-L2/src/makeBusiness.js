import {
    srl
} from "./sponsors";

export default class makeBusiness {
    constructor(owner, director, cash, emp) {
        this.owner = owner;
        this.director = director || 'Victor';
        this.cash = cash;
        this.emp = emp;
    }
    busenessText() {
        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
        console.log(`And we have a sponsors: `);
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
    }
}