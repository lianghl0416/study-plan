// $(p1).on('click' , function(){
// $(images).css({
// transform: 'translateX(0)'
// })
// })
// $(p2).on('click' , function(){
// $(images).css({
// transform: 'translateX(-300px)'
// })
// })
// $(p3).on('click' , function(){
// $(images).css({
// transform: 'translateX(-600px)'
// })
// })


//滚动条件设置
var allButtons = $('#buttons > button')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px )'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}
//添加自动滚动，且滚动到的标签高亮
var n = 0;
var size = allButtons.length
playSlide(n % size)

var timerId = setTimer()

function setTimer(){
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 2000)
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

//鼠标移入停止轮播
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

//鼠标移出 ，重新轮播
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})