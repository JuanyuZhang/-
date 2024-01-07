var subtitle = document.getElementById('subtitle');
var text = subtitle.getAttribute('data-typed-text');
console.log(text)


let i = 0;
window.onload = function typing() {


    subtitle.innerHTML += text[i]

    ++i
    var id = setTimeout(typing, 260);
    if (i == text.length) {
        clearTimeout(id)
    }
}

function listenScroll(callback) {
    console.log(callback)

    window.addEventListener('scroll', callback);
    return callback;
}

function removelistenScroll(callback) {
    window.removeEventListener('scroll', callback);
}


var ph = document.querySelector('#banner[parallax="true"]');
console.log(ph)
var board = document.getElementById('board');
console.log(board)

var parallax = function () {
    // var pxv = jQuery(window).scrollTop() / 5;
    var pxv = document.documentElement.scrollTop / 5
    var offset = parseInt(board.style.marginTop, 10);
    var max = 96 + offset;
    if (pxv > max) {
        pxv = max;
    }
    ph.style.transform = 'translate3d(0,' + pxv + 'px,0)'

}
listenScroll(parallax);



var scrollbar = document.getElementsByClassName('scroll-down-bar')[0];

scrollbar.onclick = function () {
    var of = document.getElementById('board').offsetTop
    if (of) {
        window.scrollTo({ top: of, behavior: 'smooth' })
    }

}

let scrollbartotop = document.getElementById("scroll-top-button")
scrollbartotop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

let posDisplay = false;
let scrollDisplay = false;
// Position
var setTopArrowPos = function () {
    console.log(scrollbartotop.style.bottom)
    var boardRight = board.getClientRects()[0].right;
    var bodyWidth = document.body.offsetWidth;
    var right = bodyWidth - boardRight;
    console.log(right)
    posDisplay = right >= 50;
    scrollbartotop.style.bottom = posDisplay && scrollDisplay ? '20px' : '-60px'
    scrollbartotop.style.right = right - 64 + 'px'

}
setTopArrowPos();
window.addEventListener('resize', setTopArrowPos);

let headerHeight = board.offsetTop;
listenScroll(function () {
    var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
    scrollDisplay = scrollHeight >= headerHeight;
    // console.log("这是scroll "+scrollDisplay)
    // console.log(scrollHeight +' '+ headerHeight)
    scrollbartotop.style.bottom = posDisplay && scrollDisplay ? '20px' : '-60px'
}
)
let navbar = document.getElementById('navbar');
function getoffsettop(element) {
    let actualTop = element.offsetTop;

    let current = element.offsetParent;

    while (current !== null) {

        actualTop += current.offsetTop;

        current = current.offsetParent;

    }

    return actualTop;
}
let OFS= getoffsettop(navbar)
if (window.scrollY > 0) {
    navbar.classList.remove('navbar-dark');
    // submenu.removeClass('navbar-dark');
}
listenScroll(function () {
    // navbar[navbar.offsetTop > 50 ? 'addClass' : 'removeClass']('top-nav-collapse');
    // submenu[navbar.offsetTop > 50 ? 'addClass' : 'removeClass']('dropdown-collapse');
    // OFS= getoffsettop(navbar)
    console.log(window.scrollY)
    if (window.scrollY > 50) {
        navbar.classList.add("top-nav-collapse")
    }
    else {
        navbar.classList.remove('top-nav-collapse')
    }
    if (window.scrollY > 0) {
        navbar.classList.remove('navbar-dark');
        //   submenu.removeClass('navbar-dark');
    } else {
        navbar.classList.add('navbar-dark');
        //   submenu.removeClass('navbar-dark');
    }
});