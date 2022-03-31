var Access = /** @class */ (function () {
    function Access(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Access.prototype.getName = function () {
        console.log(this.fname + "    " + this.lname);
    };
    return Access;
}());
var a1 = new Access('chaitali', 'samudre');
