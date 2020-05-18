function getSibling(node) {
    var allChildren = item3.parentNode.children
    var array = { length: 0 }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== item3) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}

function addclass(node, classes) {

    for (let key in classes) {
        // var value = classes[key]
        if (classes[key]) {
            node.classList.add(key)
        } else {
            node.classList.remove(key)
        }
    }
}