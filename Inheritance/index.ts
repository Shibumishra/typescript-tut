export { }

class parent {
    name: string;
    setName(name: string) {
        this.name = name
    }
}

class child extends parent {

    getName() {
        return this.name;
    }
}

let c1 = new child();
c1.setName("Shibu Mishra");
console.log(c1.getName());