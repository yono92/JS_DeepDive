/**
 * 함수가 자기 자신을 호출하는 것을 재귀 호출이라 한다.
 * 재귀 함수는 자기 자신을 호출하는 행위 즉 재귀 호출을 수행하는 함수를 말한다.
 */

function countdown(n) {
    if (n<0) return;
    console.log(n);
    countdown(n - 1);
}

countdown(10);

console.log("-------------------------------");

function factorial(n) {
    // 탈출조건 n이 1이하일 때 재귀 호출을 멈춘다.
    if (n<=1) return 1;

    //재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(3));