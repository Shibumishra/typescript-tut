var demoF1 = Symbol("d1");
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[demoF1] = function () {
        return 'Some data!';
    };
    return Demo;
}());
var data = new Demo();
console.log(data[demoF1]());
