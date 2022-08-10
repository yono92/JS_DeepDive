/**
 * const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
 */

const person = {
    name: 'yoonsejong'
};

person.name = 'yoon';

console.log(person);

// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.


