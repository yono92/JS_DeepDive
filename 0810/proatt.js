const person = {
    name: 'Yoon'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'))

const obj = {};

console.log(obj.constructor === Object);