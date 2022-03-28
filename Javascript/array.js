let contactList = []; //declare of empty array 
console.log(typeof contactList) // object
console.log(contactList);

let contactL = new Array(); // declare array with new keyword
console.log(contactL);

contactL = ['twenty', 20, true, 'hello']; // initlization or assing value to array
console.log(contactL);

//decleartion and initlization at same time
let classList = ['99th', '66', 'thbs'];
console.log(classList);
//accssing value from array;
console.log(classList[2]); // classList[2]
console.log(classList["1"]); // index as string qoutes
//update values inside array
//first access array position and = to accessing new value.

classList[2] = "THIS";
console.log(classList)