var name = 'leo';
 function fire(paramter) {
    var test = 'test';
    console.log(paramter);
}
fire(18);
// console.log(test);
//test is not defined,because we can't read the test define in the function;
const constString = 'leoric';
// const constString = 'hello world';we can't change the constString which is const;
console.log(constString);
var self = this;
function confirmThis(){
    setTimeout (function () {
        console.log(this.name)
        console.log(this)
        this.name = 'hahah'
        console.log(this.name)
    },500)
    console.log(this+"hah")
}
var test = function () {
    confirmThis();
    console.log(this+"anything wrong")
    console.log('hello')
}
test();
console.log(this.name)