var demoF1 = Symbol("d1");

class Demo{
    [demoF1](){
        return 'Some data!';
    }
}

var data = new Demo();
console.log(data[demoF1]())