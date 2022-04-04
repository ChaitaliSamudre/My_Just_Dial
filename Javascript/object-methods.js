const colorsCollection = {
    colorone : 'red',
    colortwo : 'green',
    colorthree : 'yellow',
    colorfour : 'pink',
};

const colors = Object.values(colorsCollection);
console.log('------objects values-----');
console.log(colors);

const keys = Object.keys(colorsCollection);
console.log('------objects keys-----');
console.log(keys);



const objectOne = {
    firstName: 'Chaitali'
}

const objectTwo = {
    lastName: 'Samudre'
}

const combinedObject = Object.assign(objectOne, objectTwo);
console.log('------Assign method-----');
console.log(combinedObject)

//const forzonValue = {
 //   name: 'Sakshi'
//Object.freeze(forzonValue);


//forzonValue.name = 'Chaitali';
//forzonValue['age'] = '20';
//console.log(forzonValue);

var obj = {
    value : 10
};
Object.seal(obj);
obj.value =20;
console.log('----------seal method----------');
console.log(obj.value);

var obj = {
    value : 10
};
Object.freeze(obj);
obj.value =20;
console.log('----------freeze method----------');
console.log(obj.value);