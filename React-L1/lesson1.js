const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
    .filter(name => name.length > 0)
    .map(name => name.toLowerCase().trim())

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

function calcCash(own = 0) {
    return own.reduce((a, b) => a + b, 0);
}

const money = calcCash(cash);

function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    const sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: `);
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
}

makeBusiness(...['Sam', null, money, employersNames]);