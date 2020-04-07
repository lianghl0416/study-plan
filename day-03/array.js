var a1 = [
    {
        firstName: 'yang',
        lastName: 'shuaishuai',
    },
    {
        firstName: 'liang',
        lastName: 'chouchou'
    }
]

var result1 = [];
var result2 = []

// 1. 第一种for写法
for (var i = 0; i < a1.length; i++) {
    result1.push({ fullName: a1[i].firstName + '-' + a1[i].lastName })
}

// 2. 第二种forEach写法
a1.forEach(function (item) {
    result2.push({ fullName: item.firstName + '-' + item.lastName })
})

console.log(result1)
console.log(result2)