/**
 * 제어권
 */

let count = 0;
let timer = setInterval(function () {
    console.log(count);
    if (++count>4) clearInterval(timer);
},3000)