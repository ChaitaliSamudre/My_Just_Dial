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

//find going to loop as soon as condition becomes true
const arr1 = [1,2,5,6,7,8,50,89];
const found = arr1.find((element,index) => {
    console.log(element,index)
    return element > 5;
});
console.log(found);

//findIndex method
const arr2 = [1,200,5,100,7,8,50,89];
const found1 = arr2.findIndex((element,index) => {
    console.log(element,index)
    return element > 200;
});
console.log(`condition satified element index is --> ${found1}`);

//indexof and join 

const ind=[19,34,5,6,7,8];
console.log(`=======Index of========`);
console.log(ind.indexOf(6));

console.log(`=======Joining array========`);
console.log(ind.join('-'));


// MAP is used to transform or modifed array

let personMap = [
    {name : 'Chaitali' , skill: ['java', 'html', 'css']},
    {name : 'Priya' , skill: ['java', 'html', 'css', 'javascript']},
    {name : 'Sujit' , skill: ['java', 'html', 'css','python']}
];

let mappedPerson = personMap.map((val, inx, arr) => {
    val.name = "Hello " + val.name; 
    return val;
});
console.log(mappedPerson);



   







