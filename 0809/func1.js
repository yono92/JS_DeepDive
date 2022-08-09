function changeval(primitive, obj) {
    primitive += 100;
    obj.name = 'Yoon';
}

let num = 100;
let person = {
    name: 'SeJong',
}

console.log(num); // 100
console.log(person); // {name: 'SeJong'}

changeval(num, person);

console.log(num);
console.log(person);

