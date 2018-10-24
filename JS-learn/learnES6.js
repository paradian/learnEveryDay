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



var a;
//立即执行函数,immediately invoked function expression ,IIFE
(function IIFE () {
    var a = 'hello world';
    console.log(a);
})();
// 这两种方法功能上是一样的;
(function IIFE1 (){
    console.log('dose this work?')
}())

// 此处会报错,ReferenceError,因为let不存在变量提升,在执行到let之前变量都是不存在的
// console.log(helloworld)
// let helloworld;

// var变量声明和函数声明会存在变量提升,函数表达式不会,还有函数声明的优先级比变量声明的优先级高
// 此处会报undefined;
console.log(world)
var world = 'world'

// 此处会输出2
var testa = 2;
var testa;
console.log(testa)

// 此处会输出1,因为函数会被优先提升,即foo会先执行function foo...而不是foo =function...
fooo();
var fooo;
function fooo () {
    console.log(
        1
    )
}
fooo= function() {
    console.log(2)
}

if (typeof foo == 'undefined') {
    foo = 32;
    console.log('永远不会执行')
}
console.log(foo)