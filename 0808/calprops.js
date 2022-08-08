let prefix = 'prop';
let i = 0;

let obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);

console.log(typeof obj['prop-1']);

const obj2 ={
    name : 'sejong',
    sayHi: function () {
        console.log("Hi   " + this.name);
    },
}

obj2.sayHi();