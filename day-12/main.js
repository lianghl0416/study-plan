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
        var n = index * -300
        $('#images').css({
            transform: 'translate(' + n + 'px )'
        })
    })
}
//添加自动滚动，且滚动到的标签高亮
var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
var timerId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 2000)
//鼠标移入停止轮播
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
//鼠标移出 ，重新轮播
$('.window').on('mouseleave', function () {
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 2000)
})