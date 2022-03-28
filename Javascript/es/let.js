function hello() {
    var a = "i am a"; // globally available

    for (var i = 0; i < 5; i++) {
        var b = "block";
    }
    console.log(b);
}

hello();

const CMPYNAME = 'THIS';
// CMPYNAME = 'THBS';

function funcaa() {
    if (true) {
        const tmp = 123;
        console.log(tmp); 
    }
}

funcaa();


const myObj = {};
// Object.freeze(myObj); //fix
// myObj = {};

myObj['fname'] = 'Chaitali';
console.log(myObj);

let message = 'NEWS';
let single = message + 'hello\n' + 'world\n' + 'my\n' + 'name\n' + 'is\n' + 'chaitali\n';

console.log(single)
// ES6 ways of string concat 
let myMessage =
    `
${message}
hello
world
i
am 
on
newline
${message}
without adding
`;

console.log(myMessage);

