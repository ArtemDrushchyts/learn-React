const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
    .filter(name => name.length > 0)
    .map(name => name.toLowerCase().trim());

export default employersNames;