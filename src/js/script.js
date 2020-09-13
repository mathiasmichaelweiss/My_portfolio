'use strict';

const menuItem = document.querySelectorAll('.nav__link'),
    lang = document.querySelectorAll('.languages'),
    workLink = document.querySelectorAll('.work__link'),
    skillImage = document.querySelectorAll('.skill__img'),
    sendMessageBtn = document.querySelectorAll('.send__message'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelectorAll('.modal__close__item'),
    btn = document.querySelectorAll('#btn');

/* function scrollSetup (elem) {
    elem.scrollIntoView({block: 'center', behavior: 'smooth'});
}

btn.addEventListener('click', () => {
    handleButtonClick(menuItem[1]);
}); */



btn.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.cssText = `
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        `;
    });
    item.addEventListener('mouseout', () => {
        item.style.cssText = ``;
    });
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

menuItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#070707';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#828282';
    });
});

lang.forEach(item => {
    item.addEventListener('click', (e) => {
        let event = e.target;
        if (event.classList.contains('languages')) {
            item.style.color = '#070707';
        }

    });

});

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