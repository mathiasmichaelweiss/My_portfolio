'use strict';

const menuItem = document.querySelectorAll('.nav__link'),
    burgerMenuItem = document.querySelectorAll('.burger__link'),
    lang = document.querySelectorAll('.languages'),
    workLink = document.querySelectorAll('.work__link'),
    skillImage = document.querySelectorAll('.skill__img'),
    sendMessageBtn = document.querySelectorAll('.send__message'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelectorAll('.modal__close__item'),
    menuBurger = document.querySelector('.menu__burger'),
    openBurger = document.querySelector('.burger__item'),
    closeBureger = document.querySelector('.Burger__close__item'),
    btn = document.querySelectorAll('#btn'),
    formBtn = document.querySelector('.form__button');


formBtn.addEventListener('click', () => {
    modal.classList.add('invisible');
});



openBurger.addEventListener('click', () => {
    if (menuBurger.classList.contains('invisible')) {
        menuBurger.classList.remove('invisible');
        openBurger.classList.add('invisible');
    }
});

closeBureger.addEventListener('click', () => {
    menuBurger.classList.add('invisible');
    openBurger.classList.remove('invisible');
});

//Плавные якоря
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

function addShadows(elem) {
    elem.addEventListener('mouseover', () => {
        elem.style.cssText = `
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        `;
    });
    elem.addEventListener('mouseout', () => {
        elem.style.cssText = ``;
    });
}

btn.forEach(item => {
    addShadows(item);
});

sendMessageBtn.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.remove('invisible');
    });
});

closeModal.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('invisible');
    });
    item.addEventListener('mouseover', () => {
        item.style.cssText = `
        transform: rotate(-90deg);
        transition: 0.2s;
        `;
    });
    item.addEventListener('mouseout', () => {
        item.style.cssText = `
        transform: rotate(90deg);
        transition: 0.2s;
        `;
    });
});

workLink.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.cssText = `text-decoration-line: underline;`;
    });
    item.addEventListener('mouseout', () => {
        item.style.cssText = `text-decoration-line: none;`;
    });
});

function BlackMouseOver(elem) {
    elem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#070707';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '#828282';
        });
    });
}


function activateChoose(elem) {
    elem.forEach((item, i) => {
        item.addEventListener('click', () => {
            for (i = 0; i < elem.length; i++) {
                if (elem[i].classList.contains('on')) {
                    elem[i].classList.remove('on');
                }
                item.classList.add('on');
            }
        });
    });
}

activateChoose(lang);
BlackMouseOver(menuItem);
BlackMouseOver(burgerMenuItem);

// skills class
class Skills {
    constructor(src, title, parentSelector, lvl) {
        this.src = src;
        this.title = title;
        this.parent = document.querySelector(parentSelector);
        this.lvl = lvl;
    }
    render() {
        const element = document.createElement('div');
        element.classList.add('skills__item');

        element.innerHTML = `
            <div class="skill__icon">
                <img src=${this.src} alt="" class="skill__img">
            </div>
            <h4 class="skill__title">${this.title}</h4>
            <div class="skill__level">
                <img src=${this.lvl} alt="">
            </div>
        `;

        this.parent.append(element);
    }
}

new Skills(
    '/src/img/icons/first__icon.png',
    'HTML5',
    '.skills',
    '/src/img/icons/4_skill.png'
).render();

new Skills(
    '/src/img/icons/second__icon.png',
    'CSS3',
    '.skills',
    '/src/img/icons/4_skill.png'
).render();

new Skills(
    '/src/img/icons/third__icon.png',
    'JavaScript',
    '.skills',
    '/src/img/icons/4_skill.png'
).render();

new Skills(
    '/src/img/icons/fourth__icon.png',
    'React',
    '.skills',
    '/src/img/icons/4_skill.png'
).render();

// ______________ // 

// Porlfoilio accordion

const accordion = document.querySelector('.accordion__inner'),
    portfolioItem = document.querySelectorAll('#portfolio_opacity'),
    openAccordion = document.querySelector('.open'),
    closeAccordion = document.querySelector('.close');


function portfolioAccordion() {
    if (accordion.classList.contains('hidden')) {
        openAccordion.classList.remove('hidden');
        closeAccordion.classList.add('hidden');
    } else {
        openAccordion.classList.add('hidden');
    }

    openAccordion.addEventListener('click', () => {
        accordion.classList.remove('hidden');
        closeAccordion.classList.remove('hidden');
        openAccordion.classList.add('hidden');

    });

    closeAccordion.addEventListener('click', () => {
        accordion.classList.add('hidden');
        closeAccordion.classList.add('hidden');
        openAccordion.classList.remove('hidden');
    });
}

portfolioAccordion();