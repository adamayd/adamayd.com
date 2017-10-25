
function darkNav(ev) {
    // document.querySelector('nav a').style.color = '#888';
    navLinks.forEach(navLink => navLink.style.color = '#888888');
    ev.path[0].style.color = '#ffffff';
}

function lightNav(ev) {
    navLinks.forEach(navLink => navLink.style.color = '#ffffff');
}

window.onscroll = function() {
    // console.log(document.body.scrollTop);
    if (document.body.scrollTop > (headerHeight - 40)) {
        console.log('change the nav');
        document.querySelector('nav').style.backgroundColor = 'rgba(0,0,0,1)';
    } else {
        console.log('leave the nav');
        document.querySelector('nav').style.backgroundColor = 'rgba(0,0,0,0.2)';
    }
}

// let scrollOffset = document.querySelector('header').offsetTop;
let headerHeight = document.querySelector('header').scrollHeight;
// console.log(scrollOffset, headerHeight);

const navs = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('nav a');
navs.forEach(nav => nav.addEventListener('mouseover', darkNav));
navs.forEach(nav => nav.addEventListener('mouseleave', lightNav));
