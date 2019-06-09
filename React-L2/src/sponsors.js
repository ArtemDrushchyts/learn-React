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
const sumSponsors = eu.concat(rus, 'unexpected sponsor');

export {
    money,
    sumSponsors,
    srl
};