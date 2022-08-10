let user = {
    name: 'Sejong',
    Job: 'Developer',
    url : {
        git: "https://github.com/yono92"
    }
}


// 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
let copyObject = function (target) {
    let result = {};
    for (let prop in target) {
        result[prop] = target[prop];
    }
    return result;
}



let user2 = copyObject(user);

user2.name = 'Yoon';
console.log(user.name === user2.name); // false

user.url.git = 'https://github.com/yono';
console.log(user.url.git === user2.url.git);

user2.url.git = '';
console.log(user.url.git === user2.url.git);

const copyObjectDepp = function (target) {
    let result = {};
    if (typeof target === 'object' && target !== null) {
        for (let prop in target) {
            result[prop] = copyObjectDepp(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};

let obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};

let obj2 = copyObjectDepp(obj);

console.log("----------------------------------")
console.log(obj);
console.log(obj2);