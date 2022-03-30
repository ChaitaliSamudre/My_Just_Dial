let obj = {
name : "thbs",
sayLater: function () {
    console.log(this)
    console.log(this.getAddress());
    console.log(`${this.name}`);
},
getAddress: function (){ return 'BNG';}
};
obj.sayLater();

let obj1={
    name:'thbs',
            saylater:function () {
           console.log(this);
          setTimeout( () => {
                    console.log(this);
                  console.log(`${this.name}`);
                   
          },1000);
        }
 
 };
 obj.saylater();