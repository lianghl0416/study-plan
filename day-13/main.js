// setTimeout(function () {
// $('.images>img:nth-child(1)').css({
// transform: 'translateX(-100%)'
// })
// $('.images>img:nth-child(2)').css({
// transform: 'translateX(-100%)'
// })
// $('.images>img:nth-child(1)').one('transitionend',function(e){
// $(e.currentTarget) .addClass('right').css({transform:'none'})
// 
// })
// }, 2000)
// setTimeout(function () {
// $('.images>img:nth-child(2)').css({
// transform: 'translateX(-200%)'
// })
// $('.images>img:nth-child(3)').css({
// transform: 'translateX(-100%)'
// })
// $('.images>img:nth-child(2)').one('transitionend',function(e){
// $(e.currentTarget) .addClass('right').css({transform:'none'})
// })
// }, 4000)
// setTimeout(function () {
// $('.images>img:nth-child(3)').css({
// transform: 'translateX(-200%)'
// })
// $('.images>img:nth-child(1)').css({
// transform: 'translateX(-100%)'
// })
// $('.images>img:nth-child(3)').one('transitionend',function(e){
// $(e.currentTarget) .addClass('right').css({transform:'none'})
// })
// }, 6000)
// setTimeout(function () {
// $('.images>img:nth-child(1)').css({
// transform: 'translateX(-200%)'
// })
// $('.images>img:nth-child(2)').css({
// transform: 'translateX(-100%)'
// })
// $('.images>img:nth-child(1)').one('transitionend',function(e){
// $(e.currentTarget) .addClass('right').css({transform:'none'})
// 
// })
// }, 8000)

let n
初始化()

setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEeter($(e.currentTarget))
        })
        makeCurrent(getImage(n+1))
    n += 1
}, 3000)






function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}

function 初始化() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node){
    $node.removeClass('leave enter').addClass('current')
    return $node
}
function makeLeave($node){
    $node.removeClass('current enter').addClass('leave')
    return $node
}
function makeEeter($node){
    $node.removeClass('current leave').addClass('enter')
    return $node
}


// setTimeout(() => {
    // $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
        // .one('transitionend', (e) => {
            // $(e.currentTarget).removeClass('leave').addClass('enter')
        // })
    // $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
// }, 4000)
// setTimeout(() => {
    // $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
        // .one('transitionend', (e) => {
            // $(e.currentTarget).removeClass('leave').addClass('enter')
        // })
    // $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
// }, 6000)
// setTimeout(() => {
    // $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
        // .one('transitionend', (e) => {
            // $(e.currentTarget).removeClass('leave').addClass('enter')
        // })
    // $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
// }, 8000)






