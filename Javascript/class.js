var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(fname, lname) {
        this.fname = "";
        this.lname = "";
        console.log('i am in coonstructor');
        console.log(fname, lname);
        this.fname = fname;
        this.lname = lname;
    }
    Persons.prototype.name = function () {
        return "".concat(this.fname, " ").concat(this.lname);
    };
    Persons.prototype.whoAreYou = function () {
        return "Hi i'm ".concat(this.name());
    };
    return Persons;
}());
//Inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fname, lname, course) {
        var _this = _super.call(this, fname, lname) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.whoAreYou = function () {
        return "".concat(_super.prototype.whoAreYou.call(this), " and i'm studying this ").concat(this.course);
    };
    Student.prototype.getCourseDetails = function () {
        return "".concat(this.course, " is from child class");
    };
    return Student;
}(Persons));
//let ram = new Persons('Ram','Shah');
//let ram1 = ram.name();
//console.log (ram1);
//let Amit = new Persons('Amit' , 'shah');
//console.log (Amit.whoAreYou);
var chaitali = new Student('Chaitali', 'Samudre', 'Java');
console.log(chaitali.whoAreYou);
