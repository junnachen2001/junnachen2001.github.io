let button = document.getElementById('nav-button')
let right = document.querySelector('.aside-right')
let left = document.querySelector('.aside-left')
let topbar = document.getElementById('top-bar')
let bottombar = document.getElementById('bottom-bar')
let middlebar = document.getElementById('middle-bar')
let lst = document.getElementById('nav-list')
var first = true
var open = false

function openMenu() {
  if (first) {
    right.classList.add('animate-right')
    left.classList.add('animate-left')
    topbar.classList.add('animate-top')
    bottombar.classList.add('animate-bottom')
    middlebar.classList.add('animate-middle')
    lst.classList.add('fade-in')
    document.querySelector('html').style.overflow = 'hidden'
    first = false
    open = true
  } else if (open) {
    right.classList.remove('animate-right')
    left.classList.remove('animate-left')
    topbar.classList.remove('animate-top')
    bottombar.classList.remove('animate-bottom')
    middlebar.classList.remove('animate-middle')
    lst.classList.remove('fade-in')

    //close menu
    right.classList.add('animate-right-reverse')
    left.classList.add('animate-left-reverse')
    topbar.classList.add('animate-top-reverse')
    bottombar.classList.add('animate-bottom-reverse')
    middlebar.classList.add('animate-middle-reverse')
    lst.style.visibility = 'hidden'
    document.querySelector('html').style.overflow = 'scroll'
    open = false
  } else {
    right.classList.remove('animate-right-reverse')
    left.classList.remove('animate-left-reverse')
    topbar.classList.remove('animate-top-reverse')
    bottombar.classList.remove('animate-bottom-reverse')
    middlebar.classList.remove('animate-middle-reverse')

    //close menu
    right.classList.add('animate-right')
    left.classList.add('animate-left')
    topbar.classList.add('animate-top')
    bottombar.classList.add('animate-bottom')
    middlebar.classList.add('animate-middle')
    lst.classList.add('fade-in')
    document.querySelector('html').style.overflow = 'hidden'
    open = true
  }
}

button.onclick = openMenu
for(var i = 0; i < lst.childElementCount; i ++) {
  lst.children[i].children[0].onclick = openMenu
}