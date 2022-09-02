export { }
class App {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}

var a1 = new App("Satyabrat Kumar");
console.log(a1.getName());