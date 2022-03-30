//rest operator

function thbs(a,b, ...config) {
    console.log(config);
    console.log(config.length);
}

thbs(1,2,"hello", true, 7, 'mean', '99')

/* Spread Operator */

let listName = ['Priya','Jaya','Chaitali'];
console.log(listName);
let listTop = ['Munit', ...listName];
console.log(listTop);

var str = "hello world";
console.log(str);

var chars = [...str];
console.log(chars);
console.log(chars.length);



