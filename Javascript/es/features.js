var DetailInfo = /** @class */ (function () {
    function DetailInfo() {
    }
    DetailInfo.prototype.getDetailsList = function (list, key) {
        return list.filter(function (ele, inx, arr) {
            return ele.name.includes(key || 'Chaitali');
        });
    };
    return DetailInfo;
}());
var dio = new DetailInfo();
var list = [
    { name: 'Chaitali Samudre' },
    { name: 'Priya Shetty' }
];
console.log(dio.getDetailsList(list));
