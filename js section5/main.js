var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');
var lineWidth = 5


autoSetCanvasSize(yyy)
//画矩形
// context.fillStyle = 'red';
// context.fillRect(20, 20, 150, 100);
// 描边
// context.strokeStyle = 'blue';
// context.strokeRect(20, 20, 150, 100);
// 三角形
// context.fillStyle = 'red';
// context.beginPath();
// context.moveTo(400,400);
// context.lineTo(500,400);
// context.lineTo(500,500);
// context.fill();
listenToUser(yyy)
//控制橡皮檫是否开启：
var eraserEnabled = false
brush.onclick = function () {
    eraserEnabled = false
    brush.classList.add('active')
    eraser.classList.remove('active')
}
eraser.onclick = function () {
    eraserEnabled = true
    eraser.classList.add('active')
    brush.classList.remove('active')
}
clear.onclick = function(){
   context.clearRect(0, 0, yyy.width, yyy.height);
}
download.onclick = function(){
    var url = yyy.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '我的画图'
    a.target = '_blank'
    a.click()
}
red.onclick = function () {
    context.fillStyle = 'red'
    context.strokeStyle = 'red'
    red.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
green.onclick = function () {
    context.fillStyle = 'green'
    context.strokeStyle = 'green'
    green.classList.add('active')
    red.classList.remove('active')
    blue.classList.remove('active')
}
blue.onclick = function () {
    context.fillStyle = 'blue'
    context.strokeStyle = 'blue'
    blue.classList.add('active')
    red.classList.remove('active')
    green.classList.remove('active')
}

thin.onclick = function(){
    lineWidth = 5
}
thick.onclick = function(){
    lineWidth = 10
}

//控制画板宽高属性
function autoSetCanvasSize(canvas) {
    setCanvasSize()
    window.onresize = function () {
        setCanvasSize()
    }
    function setCanvasSize() {
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}
function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill()
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1)//起点
    context.lineWidth = lineWidth
    context.lineTo(x2, y2)//终点
    context.stroke()
    context.closePath()
}

function listenToUser(canvas) {
    //曲线，监听鼠标事件：
    var using = false
    var lastPoint = { x: undefined, y: undefined }

    //特性检测
    if (document.body.ontouchstart !== undefined) {
        //触屏设备
        canvas.ontouchstart = function (aaa) {
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            using = true
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                lastPoint = { "x": x, "y": y }
            }
        }
        canvas.ontouchmove = function (aaa) {
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            if (!using) { return }
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                var newPoint = { "x": x, "y": y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint//重点
            }
        }
        canvas.ontouchend = function () {
            using = false
        }
    } else {
        //非触屏设备
        canvas.onmousedown = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            using = true
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                lastPoint = { "x": x, "y": y }
            }
        }
        canvas.onmousemove = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            if (!using) { return }
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                var newPoint = { "x": x, "y": y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint//重点
            }
        }
        canvas.onmouseup = function (aaa) {
            using = false
        }
    }
}

















