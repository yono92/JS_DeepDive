/**
 * 반복문
 * 반복문은 조건식의 평가 결과가 참인 경우 코드블록을 실행한다.
 * 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드블록을 다시 실행한다. 이는 조건식이 거짓일 때 가지 반복된다.
 */

// for 문
console.log("for loop 시작")

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("이중포문");

for (let i = 0; i < 6; i++) {
    for (let j = 0; j <6; j++) {
        if (i + j === 6) {
            console.log(`${i} , ${j}`);
        }
    }
}

// While문

console.log("while문 시작")

let cnt = 0;
while (cnt < 3) {
    console.log(cnt);
    cnt++;
}


/**
 * 무한루프
 */
// while (true) {
//     console.log(cnt);
//     cnt++;
//     // cnt 가 3이면 코드블록을 탈출한다.
//     if (cnt === 3) break;
// }


/**
 * indexOf 메서드 원리
 * @type {string}
 */

console.log("indexOf 메서드 만들기")

let str = "Hello World";
let search = "W";
let index;
for (let i = 0; i < str.length; i++) {
    if (str[i] = search) {
        index = i;
        break;
    }
}

console.log(index);
