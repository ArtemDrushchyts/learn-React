export default class EmployersNames {
    constructor(arr) {
        this.arr = arr;
    }
    sorted() {
        return this.arr.filter(name => name.length > 0)
            .map(name => name.toLowerCase().trim());

    }
}