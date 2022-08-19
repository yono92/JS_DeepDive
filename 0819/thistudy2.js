function func1() {
    console.log(this);
}

func1();

console.log(this); // {}  빈 객체

console.log(this === module.exports);

