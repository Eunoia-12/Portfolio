function toggleMenu(){
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const imgs = document.querySelectorAll('.slider img')
const dots = document.querySelectorAll('.dot')
let currentImg = 0
const interval = 3000

function changeSlide(n){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.opacity = 0
        dots[i].className = dots[i].className.replace('active','')
    }

    currentImg = n
    
    imgs[currentImg].style.opacity = 1
    dots[currentImg].className += 'active'
}


