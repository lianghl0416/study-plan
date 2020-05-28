

// clickMe.addEventListener('click', function () {
// popover.style.display = 'block'
// })
// wrapper.addEventListener('click', function (e) {
// e.stopPropagation()
// })
// document.addEventListener('click', function () {
// popover.style.display = 'none'
// })

//用jquery的方法来写：

// $(clickMe).on('click', function () {
// $(popover).show()
// $(document).one('click', function (){
// $(popover).hide()
// })
// })
// $(wrapper).on('click', function (e){
// e.stopPropagation()
// })
// 

//jqurey方法优化
$(clickMe).on('click', function () {
    $(popover).show()
    setTimeout(function () {
        $(document).one('click', function () {
            $(popover).hide()
        })
    },0)
})