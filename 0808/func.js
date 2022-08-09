// 함수 선언문
function add(x,y) {
    return x + y;
}

// 함수 표현식

let add2 = function (x, y) {
    return x + y;
};

// Function 생성자 함수
let add = new Function('x', 'y', 'return x+y');

//화살표 함수
let add = (x, y) => x + y;

