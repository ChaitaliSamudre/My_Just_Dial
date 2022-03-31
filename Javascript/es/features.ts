class DetailInfo {
    public getDetailsList(list: object[], key?: string | number) {
        return list.filter(
            (ele: any, inx, arr) => {
                return ele.name.includes(key || 'Chaitali');
            }
        )
    }
}
let dio : DetailInfo = new DetailInfo();

let list = [
    { name: 'Chaitali Samudre'},
    { name: 'Priya Shetty'}   
]

console.log(dio.getDetailsList(list));

