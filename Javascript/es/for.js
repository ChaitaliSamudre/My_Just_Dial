/*let arr = [10, 20, 30];
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}*/

//let myArr = [1, 2, 3];
let myArr = ['hello', 'world'];
for (let i=0; i < myArr.length; i++) {
console.log(`I am in for iteration number ${i} and array value at iteration "${myArr[i]}"`)
}

console.log(`Started loop with forEach`);
myArr.forEach( (ele,index,arr) => {
    console.log(`I am in for iteration number ${index} and array value at iteration "${ele}"--> ${arr}`)
});

//filtered element based on condition
let numberList = [20, 30, 15, 5, 3, 7];

    let elemeless_5 = numberList.filter((val,indx,arr) => {
        console.log(val,indx,arr)
        return val > 5;
    });
    console.log(`-----filtered number----`)
    console.log(elemeless_5);

// filtered array of object

let personList = [
    {name : 'Chaitali' , skill: ['java', 'html', 'css']},
    {name : 'Priya' , skill: ['java', 'html', 'css', 'javascript']},
    {name : 'Sujit' , skill: ['java', 'html', 'css','python']}
];

let filteredPerson = personList.filter((val, indx, arr) => {
    console.log(val)
    return val.name.startsWith('P');
    //return val.skill.includes('java');
}
);
console.log(`=====Filtered info=======`)
console.log(filteredPerson);


   







