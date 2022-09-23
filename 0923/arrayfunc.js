const listData = [
	{
		id: 1,
		text: 'hello',
	},
	{
		id: 2,
		text: 'sejong',
	},
	{
		id: 3,
		text: 'Good',
	},
	{
		id: 4,
		text: 'Today',
	},
];

/*
map()
 Array.prototype.map()
arr.map(callback(currentValue[,index[.array]])(, thisArg)
 */
const MapResult = listData.map((list) => list);
console.log(MapResult);
const MapResult1 = listData.map((list) => list.text);
console.log(MapResult1);
const MapResult2 = listData.map((list) => list.id);
console.log(MapResult2);

// 맵과 같은 결과를 얻기위한 코드
const mockMap = (list) => {
	let result = [];
	for (const i of list) {
		result.push(i.text);
	}
	return result;
};
const result = mockMap(listData);
console.log('Map Mockup', result);

/**
 * filter()
 * arr.filter(callback(element[,index[,array]])[,thisArg])
 */

const FilterResult = listData.filter((list) => list.text !== 'hello');
console.log('Filter 결과', FilterResult);

// filter가 아닌 목업구현
const mockFilter = (list) => {
	let result = []; // filter() 역시 새로운 배열을 반환
	for (const i of list) {
		if (i.text !== 'hello') {
			result.push(i); // 해당 조건에 맞는 객체를 push
		}
	}
	return result;
};

const result2 = mockFilter(listData);
console.log(result2);

/**
 * reduce()
 * arr.reduce(callback[,initialValue]
 * reduce() 메서드는 첫 번쨰 callback 함수에서 reducer() 함수를 실행하고 하나의 결과 값을 반환한다.
 *
 * reducer() 함수는 네 개의 인자를 받는다.
 */

const array1 = [1, 2, 3, 4];
const resultOfReducer = array1.reduce(
	(accumulator, currentValue, currentIndex, array) => {
		console.log('accumulator', accumulator); // output: 10 11 13 16
		console.log('currentValue', currentValue); // output: 1 2 3 4
		console.log('currentIndex', currentIndex); // output: 0 1 2 3
		console.log('array', array); // output: [1, 2, 3, 4]
		return accumulator + currentValue;
	},
	10,
);
console.log(resultOfReducer); // output: 20
