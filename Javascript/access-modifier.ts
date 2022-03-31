class Access{
    constructor(private fname:any, private lname:any) {

    }
    getName() {
        console.log(this.fname + "    " + this.lname);
    }

}
let a1 = new Access('chaitali', 'samudre');
