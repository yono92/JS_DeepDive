/**
 * 다양한 함수의 형태
 */

// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 3;
    return console.log(a * b);
}());

// 기명 즉시 실행 함수
(function () {
    let a = 5;
    let b = 3;
    return console.log(a + b);
}());