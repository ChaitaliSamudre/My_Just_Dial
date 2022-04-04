let pro = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('This is Promise');

    }, 30000);
});

pro.then(
    (success) => {
        console.log(`I get successful to create promise ${success}`);
    },
    (error) => {
        console.log(`Not getting successs to create promise ${error}`);
    })
    .then(
        (succval) => { console.log( `I am in success chaining ${succval}`)},
        (errorval) => { console.log( `I am in error chaining ${errorval}`)}
    )
    .catch(
        (onReject) => {
            console.log(`I am inside reject`);
        }
    )
