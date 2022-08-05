/**
 * 할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.
 * 할당 연산자는 좌항의 변수에 값을 할당하므로 변수 값이 변하는 부수 효과가 있다.
 *
 */

let x;

x = 10;
console.log(x); //10

x += 5; // x= x+5
console.log(x); //15

x -= 5; // x=x-5
console.log(x); // 10

x /= 5; //x=x/5
console.log(x);

x %= 5; // x=x%5
console.log(x);
