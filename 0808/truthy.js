// 자바스크립트 엔진은 불리언 타입이 아닌 Truthy값 또는 Falsy 값으로 구분한다.

if ('') {
    console.log("1")
}

if (true) {
    console.log("2");
}

if (0) {
    console.log("3");
}

if ('str') {
    console.log("4");
}

if (null) {
    console.log("5");
}