const arr = [1, 2, 3];

arr.forEach(console.log);

/**
 * 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 백슬래시(\) 시작하는 이스케이프 시퀀스를 사용해야 한다.
 * \0 Null
 * \b 백스페이스
 * \f 폼 피드
 * \n : 개행 다음 행으로 이동
 * \r : 개행 : 커서를 처음으로 이동
 * \t : 탭 수평
 * \v : 탭 수직
 *
 */

/**
 * 표현식 삽입
 */

let first = "yoon";
let last = "sejong";

console.log("My name is " + first + last);

console.log(`My name ${first} ${last}`);
