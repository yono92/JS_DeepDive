/**
 * 함수의 배개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 하며, 매개변수를 통해 함수의 외부에서
 * 콜백 함수를 전달 받은 함수를 고차함수라고 한다.
 *
 * 고차 참수는 콜백 함수를 자신의 일부분으로 합성한다.
 * 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
 * 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달 할 수 있다.
 *
 * @param n
 * @param f
 */
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}


let logAll = function (i) {
    console.log(i);
}

repeat(5, logAll);

let logOdds = function (i) {
    if (i%2) console.log(i);
};


repeat(5, logOdds);
