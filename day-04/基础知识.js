// var s = 'hello';
// s.toUpperCase();//将s里的字符串转为大写。
// 
// 
// 
// var a = 'HELLO';
// var lower = a.toLowerCase();//将a里的字符串转为小写，并赋值给变量lower。


// var b = 'hello, world';
//    b.indexOf('world');//返回7，会搜索指定字符串出现的位置。

// var s = 'hello, world'
// s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
// s.substring(7); // 从索引7开始到结束，返回'world'

// var arr = ['A','B','C','D','E','F','G'];
// arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
// arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

// var arr = [1,2];
// arr.push('A', 'B'); // 返回Array新的长度: 4
// arr; // [1, 2, 'A', 'B']
// arr.pop(); // pop()返回'B'
// arr; // [1, 2, 'A']
// arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
// arr; // []
// arr.pop(); // 空数组继续pop不会报错，而是返回undefined
// arr; // []
// 
// var arr = [1, 2];
// arr.unshift('A', 'B'); // 返回Array新的长度: 4
// arr; // ['A', 'B', 1, 2]
// arr.shift(); // 'A'
// arr; // ['B', 1, 2]
// arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
// arr; // []
// arr.shift(); // 空数组继续shift不会报错，而是返回undefined
// arr; // []
// 
// 注意：push&pop为在数组最后一个元素进行增加和删除；
// unshift&shift为在数组第一元素进行增加或者删除。

// var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
//从索引2开始删除3个元素,然后再添加两个元素：
// arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
// arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
//只删除,不添加：
// arr.splice(2, 2); // ['Google', 'Facebook']
// arr; // ['Microsoft', 'Apple', 'Oracle']
//只添加,不删除：
// arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
// arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']


// var arr = ['A', 'B', 'C', 1, 2, 3];
// arr.join('-'); // 'A-B-C-1-2-3'
// join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

// 
// var arr = ['小明','小红','大军','阿黄']
// 
// console.log("欢迎"+arr.splice(0,3).join(',')+"和"+arr+"同学")//欢迎小明,小红,大军和阿黄同学！


// var age = 26;
// if (age >= 18) {
// alert('adult');
// }
// else if (age < 6) {
// alert('kids')
// }
// else {
// alert('tennager');
// }

// var height = parseFloat(prompt('请输入身高(m):'));
// var weight = parseFloat(prompt('请输入体重(kg):'));
// var bmi = weight/(height*height);
// if (bmi>32){
// alert('严重肥胖')
// }
// else if(bmi>=28){
// alert('肥胖');
// }
// else if(bmi>=25){
// alert('过重');
// }
// else if(bmi>=18.5){
// alert('正常');
// }
// else{
// alert('过轻')
// }


// 使用for循环计算1 * 2 * 3 * ... * 10的结果：
// var x = 1;
// var i;
// for (i = 1; i <= 10; i++) {
// x = x * i
// }
// if (x === 3628800) {
// console.log('1 x 2 x 3 x ... x 10 = ' + x);
// }
// else {
// console.log('计算错误');
// }
// for循环最常用的地方是利用索引来遍历数组：

// var arr = ['Apple', 'Google', 'Microsoft'];
// var i, x;
// for (i=0; i<arr.length; i++) {
// x = arr[i];
// console.log(x);
// }

// 
// var x = 0;
// for (;;) { // 将无限循环下去
// if (x > 200) {
// break; // 通过if判断来退出循环
// }
// x ++;
// }
// console.log(x);

//for...in

// var X = {
// name: 'Jack',
// age: 20,
// city: 'Beijing'
// };
// for (var key in X) {
// console.log(key); // 'name', 'age', 'city'      
// }
// 为啥出来的结果只有X中的key,而没有value。

// 由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引：
// var a = ['A', 'B', 'C'];
// for (var i in a) {
// console.log(i); // '0', '1', '2'
// console.log(a[i]); // 'A', 'B', 'C'
// }
// 请注意，for ... in对Array的循环得到的是String而不是Number。

// 请利用循环遍历数组中的每个名字，并显示Hello, xxx!

// 第一种：for...in的方式：
var arr = ['Bart', 'Lisa', 'Adam'];
// for (var i in arr){
// console.log('Hello, ' + arr[i] + '!')
// }
// Hello, Bart!
// Hello, Lisa!
// Hello, Adam!

// 第二种：for的方式:
// for (var i = 0; i < arr.length; i++) {
        // console.log('Hello, ' + arr[i] + '!')
// }

// for循环倒序：
// var i;
// 
// for(i=arr.length-1;i>=0;i--){
    // console.log(`hello, ${arr[i]}!`);
// };

// 第三种方式：while循环：
// var i = 0;
// while(i<arr.length){
    // console.log('Hello, ' + arr[i] + '!')
    // i++;
// }

// while循环倒序：
// var i=arr.length-1;
// 
// while(i>=0){
    // console.log(`hello, ${arr[i]}!`);
    // i--;
// };
