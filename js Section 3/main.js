var div = document.getElementById('canvas')
div.onmousedown = function (a) {
    var x = a.clientx
    var y = a.clienty
    var divA = document.createElement('div')
    divA.style = "width:6px; height:6px; background:black; border-radius:3px; position:absolute; left: " + (x-3) + "px" + "top: " + (y-3) + "px"
    div.appendChild(divA)
}
div.onmousemove = function () {
}
div.onmouseup = function (z) {
    console.log(1)
}