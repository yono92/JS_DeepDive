/**
 * 증감 연산자는 위치에 의미가 있다.
 *
 * 피연산자 앞에 위치한 전위 증감/감소 연산자는 먼저 피연산자의 값을 증가/감소 시킨후, 다른 연산을 수행한다.
 *
 * 피현산자 뒤에 위치한 후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후 피연산자의 값을 증가/감소 시킨다.
 */

let x = 5, result;

result = x++;
console.log(result, x);  // 5 6

result = ++x;
console.log(result, x); // 7 7

result = x--;
console.log(result, x);// 7 6

result = --x;
console.log(result,x) // 5 5


