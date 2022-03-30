function calNumber(n1,n2,n3,n4) {
    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);

    if (n4 == undefined) {
        n4 =10;
    }

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);
    return n1 + n2 + n3 + n4;

}
calNumber(1,2,3);

function calNumberES6(n1, n2, n3=10, n4=5) {
    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);


console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);
    return n1 + n2 + n3 + n4;
}

calNumberES6(1,2,3,4); 
