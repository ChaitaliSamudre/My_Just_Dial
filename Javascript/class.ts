class Persons {
    fname = "";
    lname = "";

    constructor(fname, lname) {
        console.log('i am in coonstructor')
        console.log(fname, lname)
        this.fname = fname;
        this.lname = lname;
    }

    name(){
        return `${this.fname} ${this.lname}`
    }

    whoAreYou(){
        return `Hi i'm ${this.name()}`;
    }
}

//Inheritance

class Student extends Persons {
    course;
    constructor(fname, lname, course) {
        super(fname, lname);
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying this ${this.course}`;
    }
    getCourseDetails(){
        return `${this.course} is from child class`;
    }
}

//let ram = new Persons('Ram','Shah');
//let ram1 = ram.name();
//console.log (ram1);
//let Amit = new Persons('Amit' , 'shah');
//console.log (Amit.whoAreYou);

let chaitali = new Student('Chaitali', 'Samudre','Java');
console.log(chaitali.whoAreYou);