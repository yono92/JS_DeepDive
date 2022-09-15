/**
 * lodash 공부
 */
import _ from 'lodash';

// 배열에서 맨 앞에 elem을 추출
console.log(_.head([1, 2, 3]));
// 배열에서 맨 뒤에 elem을 추출
console.log(_.last([1, 3, 2]));
// 랜덤으로 값을 추출
console.log(_.sample([1, 2, 3, 4]));

// 배열 요소끼리 연결하기(_.join)
console.log(_.join([1, 2, 3, 4], '/'));
// output 1/2/3/4

// Object에서 값을 가져오기
let object = {
	a: [
		{
			b: {
				c: 3,
			},
		},
	],
};
// _get(object,path,[defaultValue] ) 형식으로 사용
console.log(_.get(object, 'a[0].b.c'));

console.log(_.get(object, ['a', '0', 'b', 'c']));

// default 값을 설정해서 사용할 수도 있다.
console.log(_.get(object, 'a.b.c', 'default'));

function square(n) {
	return n * n;
}

// _.map(적용대상 ,함수) 형식으로 사용한다.
console.log(_.map([4, 5], square));
