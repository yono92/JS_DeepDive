function outer() {
    let x = 1;

    function inner() {
        let y = 2;
        console.log(x + y);
    }

    inner();
}

outer();