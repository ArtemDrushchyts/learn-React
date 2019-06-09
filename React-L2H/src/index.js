import EmployersNames from './employers';
import Money from './money';
const employers = new EmployersNames(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
const emp = employers.sorted();
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {
    cash,
    eu,
    eu: [srl],
    rus
} = sponsors;


const money = new Money(cash);

class makeBusiness {
    constructor(owner, director, cash, emp) {
        this.owner = owner;
        this.director = director || 'Victor';
        this.cash = cash;
        this.emp = emp;
    }
    show() {
        const sumSponsors = eu.concat(rus, 'unexpected sponsor');
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log(`And we have a sponsors: `);
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
    }
}

const buseness = new makeBusiness('Sam', null, money, emp);
buseness.show();