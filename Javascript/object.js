//empty object 

let personDetails = {
    fname : 'Chaitali',
    lname : 'Samudre',
    phone : 99999909,
    age : 22,
    address: {
            presentAdd: {
                location: 'YTL',
                pincode: 500  // 1000
            },
            premantAdd: {
                location: 'MUN',
                pincode: 300,
            }
        }
    };

    //adding new keys to object
//personDetails.address.premantAdd.area = 1000;

//value inside object or nested object
//personDetails.address.presentAdd.pincode;

// updaing value of object key
personDetails.address.presentAdd.pincode = 1000;

console.log(typeof personDetails);
console.log(personDetails);

//let classInfo = Object.create({});
//console.log(typeof classInfo);

//update value inside object
//console.log(personDetails.lname = 'Dhamande');
personDetails.lname = 'Dhamande';
