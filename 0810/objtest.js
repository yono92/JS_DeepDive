let user = {
    name: 'Sejong',
    gender: "male"
};

const changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    }
};

let user2 = changeName(user, 'Ju');

if (user !== user2) {
    console.log("유저정보가 변경되었다");
}

console.log(user.name, user2.name);

console.log(user === user2);


// 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
let copyObject = function (target) {
    let result = {};
    for (let prop in target) {
        result[prop] = target[prop];
    }
    return result;
}



let user2 = copyObject(user);

user2.name = 'Jung';