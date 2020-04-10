// 定义函数的两种方式：
// function abs(x) {
// if (x >= 0) {
// return x;
// } else {
// return -x;
// }
// }
// 
// var abs = function (x) {
// if (x >= 0) {
// return x;
// } else {
// return -x;
// }
// };
// 要避免收到undefined，可以对参数进行检查：
// function abs(x) {
// if (typeof x !== 'number') {
// throw 'Not a number';
// }
// if (x >= 0) {
// return x;
// } else {
// return -x;
// }
// }

// function foo(x) {
// console.log('x = ' + x);
// for (var i=0; i<arguments.length; i++) {
// console.log('arg ' + i + ' = ' + arguments[i]);
// }
// }
// foo(40, 20, 30); 

// function foo(a, b, ...rest) {
// console.log('a = ' + a);
// console.log('b = ' + b);
// console.log(rest);
// }
// 

// function foo() {
// var x = 1;
// function bar() {
// var y = x + 1; // bar可以访问foo的变量x!
// console.log(y);
// }
// }
// 

// function foo() {
    // 
    // var x = 'Hello, ' + y;
    // console.log(x);
    // var y = 'jone';
// }
// 
// foo();


// console.log显示Hello, undefined，说明变量y的值为undefined。
// 这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
// 我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。
// 最常见的做法是用一个var申明函数内部用到的所有变量：
// function foo() {
    // var
        // x = 1, // x初始化为1
        // y = x + 1, // y初始化为2
        // z, i; // z和i为undefined
    // 其他语句:
    // for (i=0; i<100; i++) {
        // ...
    // }
// }

// 注意，对数组元素进行解构赋值时，多个变量要用[...]括起来。
// 
// 如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致：
// let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
// x; // 'hello'
// y; // 'JavaScript'
// z; // 'ES6

// var x=1, y=2;
// [x, y] = [y, x]


// var xiaoming = {
    // name: '小明',
    // birth: 1990,
    // age: function () {
        // var y = new Date().getFullYear();
        // return y - this.birth;
    // }
// };
// xiaoming.age; // function xiaoming.age()
// xiaoming.age(); // 今年调用是25,明年调用就变成26了
// 在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。
// 所以，this.birth可以拿到xiaoming的birth属性。


