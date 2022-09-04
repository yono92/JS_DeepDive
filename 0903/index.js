// 실행 컨텍스트와 호이스팅의 이해
function a(x) {
	console.log(x);
	var x;
	console.log(x);
	var x = 2;
	console.log(x);
}
a(1);

console.log('=================b함수 실행 =================');

function b() {
	var b;
	var b = function b() {};
	console.log(b);
	b = 'bbb';
	console.log(b);
	console.log(b);
}

b();
