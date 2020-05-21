const hamburger = document.querySelector('.hamburger--js');


hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

const main = document.querySelector('.main')


hamburger.addEventListener('click', () => {
    let margin = main.offsetTop
    if (margin === 20){
        main.style.setProperty('margin', '100px auto 0');
    } else {
        main.style.setProperty('margin', '20px auto 0');
    }
})