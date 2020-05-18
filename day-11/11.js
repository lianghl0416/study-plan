function getSibling(node) {
    var allChildren = item3.parentNode.children
    var array = { length: 0 }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}

function addclass(node, classes) {

    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}

window.lhldom = {}
lhldom.getSibling = getSibling
lhldom.addclass = addclass

lhldom.getSibling(item5)

