
const heading = document.querySelector('.header__title--js');


const button = document.querySelector('.action--js');


const myClick = () => {
    const heading = document.querySelector('.header__title--js');
    if ('Strona Domowa' === heading.innerHTML){
        heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Adriana.` 
    } else {
        heading.innerHTML = `Strona Domowa`
    }    
}

button.addEventListener('click', myClick);

const description = document.querySelector('.change__color--js');

const changeColor = () => {
    description.style.setProperty('background', '#F8FCDA');
}

description.addEventListener('mouseover', changeColor);

const removeColor = () => {
    description.style.setProperty('background', '');
}

description.addEventListener(`mouseleave`, removeColor);




