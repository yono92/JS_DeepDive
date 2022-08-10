let copObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
}

let obj = {
    a:1,
    b: {
        c: null,
        d: [1, 2],
        func1 : function () {
            console.log(3)
        },
        func2 : function () {
            console.log(4)
        }
    }
}

let obj2 = copObjectViaJSON(obj);

console.log(obj);
console.log(obj2);