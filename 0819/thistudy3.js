const obj = {
    name: "sejong",
    getName() {
        return this.name;
    }
}


function showReturnValue(callback) {
    console.log(callback());
}


showReturnValue(obj.getName);


