//封装一个函数
// function getSibling(node) {
    // var allChildren = node.parentNode.children
    // var array = { length: 0 }
    // for (let i = 0; i < allChildren.length; i++) {
        // if (allChildren[i] !== node) {
            // array[array.length] = allChildren[i]
            // array.length += 1
        // }
    // }
    // return array
// }
//封装第二个函数
function addclass(node, classes) {

    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}
//命名空间
// window.lhldom = {}
// lhldom.getSibling = getSibling
// lhldom.addclass = addclass
// 
// lhldom.getSibling(item5)

//
Node.prototype.getSibling = function() {
    var allChildren = this.parentNode.children
    var array = { length: 0 }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}

item4.getSibling()
item4.getSibling.call(item4)


Node.prototype.addclass = function (classes) {

    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        this.classList[methodName](key)
    }
}

item4.addclass({'a':true,'b':false})
item4.addclass.call(item4,{'a':true,'b':false})
 