function a(x) {
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}

a(1);

console.log("-------------")

function b() {
    var x = 1;
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}

b();