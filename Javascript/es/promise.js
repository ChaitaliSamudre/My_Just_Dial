let myMess = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('THBS');
        //reject('THBS');
    }, 2000);
});

myMess.then(
    (success) => {
        console.log(`I am in success callback of promise ${success}`);
    },
    (error) => {
        console.log(`I am in reject callback of promise ${error}`);
    })
    .then(
        (sval) => { console.log(`I am in success chaining ${sval}`)},
        (errorVal) => { console.log(`I am in error chaining ${errorVal}`)} 
    )
    .catch(
        (onReject) => {
            console.log(`I am inside reject`);
        }
    )
