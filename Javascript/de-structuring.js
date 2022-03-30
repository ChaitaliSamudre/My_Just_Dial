var list = [1,2,3];
var a = list[0], b = list[2];

//array dectsructuring
let namesList = [45,78,'three'];
let [first, ,name] = namesList;
console.log(first,name);

//ES5 /old way

/*let personInfo = () => {
    return {
        op : 'plus',
        lhs : 'left-side',
        rhs : 'right-side'
    }
}

var tmp = personInfo();
console.log(tmp);
var op = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;
*/


//object destructuring
let userName = {
    mname:'Chaitali',
    age: 24,
    phone: 99999999,
    location:{
        current:{
            city:'ytl',
            pincode: 445001,
            area:'mahatma phule society'
        },
        permanent:{
            city:'nagpur',
            pincode: 445002,
            area:'ashirwad nagar'
        }
    }
};

//let{mname ,age,phone,location} = userName;
//console.log(userName);

//nested code 


let{mname, age, phone, 
    location :{current:{city:currentcity,area}},
    location :{permanent:{city:permanentcity,pincode}} } = userName;

    console.log(mname, age, phone, currentcity, area, permanentcity, pincode);

    

