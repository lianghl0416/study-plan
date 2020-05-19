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
// function addclass(node, classes) {
// 
// for (let key in classes) {
// var value = classes[key]
// var methodName = value ? 'add' : 'remove'
// node.classList[methodName](key)
// }
// }
// 命名空间
// window.lhldom = {}
// lhldom.getSibling = getSibling
// lhldom.addclass = addclass
// 
// lhldom.getSibling(item5)

//
// Node.prototype.getSibling = function () {
// var allChildren = this.parentNode.children
// var array = { length: 0 }
// for (let i = 0; i < allChildren.length; i++) {
// if (allChildren[i] !== this) {
// array[array.length] = allChildren[i]
// array.length += 1
// }
// }
// return array
// }
// 
// item4.getSibling()
// item4.getSibling.call(item4)
// 
// 
// Node.prototype.addclass = function (classes) {
// 
// for (let key in classes) {
// var value = classes[key]
// var methodName = value ? 'add' : 'remove'
// this.classList[methodName](key)
// }
// }
// 
// item4.addclass({ 'a': true, 'b': false })
// item4.addclass.call(item4, { 'a': true, 'b': false })


// jQuery的使用
window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    if (typeof nodeOrSelector === 'string') {
        let temp = document.querySelectorAll(nodeOrSelector)  //伪数组
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSelector instanceof nodes) {
        nodes = {
            0: nodeOrSelector, length: 1
        }
    }
    nodes.addClass = function (classes) {
        classes.forEach((value) => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }
        })
    }
    nodes.text = function (text) {
        if (text === undefined) {
            var texts = []
            for (let i = 0; i < nodes.length; i++) {
                texts.push(nodes[i].textContent)
            }
            return texts
        } else {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    }
    return nodes
}


var node2 = jQuery('ul>li')
node2.addClass(['blue'])
var text = node2.text()
