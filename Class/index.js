"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    class App {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    return App;
}());
var a1 = new App("Satyabrat Kumar");
console.log(a1.getName());
