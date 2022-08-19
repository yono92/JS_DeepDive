/**
 * 자바스크립트에서 this는 기본적으로 실행되는 컨테긋트가 생성될 때 함께 결정된다.
 * 실행 컨텍스트 함수를 호출할 때 생성되므로 바꿔 말하면 this는 함수를 호출 할 때 결정 된다.
 */

// 전역공간에서의 this
console.log(this);
console.log(global);
console.log(this === global); // 책에서는 true로 나와있으나 로컬에서 실행시 false 로 출력됨 //

console.log("전역변수와 전역객체");

var a = 1;

console.log(a);
// console.log(window.a);  node 환경이기 때문에 Error
console.log(global.a);
console.log(this.a);
