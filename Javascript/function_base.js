function getAddress(){
    let addition = 10 +20;
    return 'Hello' + addition;
}
let result = getAddress();
console.log(result); // Hello30

// fuctions 
function addNumber(m1, m2) {
    return m1 + m2;
}
console.log(addNumber(100, 20));// 120

// flat arrow function
let myadd = (m1, m2) => m1 + m2;
console.log(myadd(100, 20));// 120