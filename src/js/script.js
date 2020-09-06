'use strict';

const menuItem = document.querySelectorAll('.nav__link'),
    lang = document.querySelectorAll('.languages'),
    workLink = document.querySelectorAll('.work__link'),
    skillImage = document.querySelectorAll('.skill__img'),
    sendMessageBtn = document.querySelectorAll('.send__message'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelectorAll('.modal__close__item');


sendMessageBtn.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.remove('invisible');
    });
    item.addEventListener('mousover', () => {
        item.classList.add('btn__shadow');
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


skillImage.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.cssText = `
            transition: 0.5s;
            width: 110%;
            height: 110%;
        `;

    });
    item.addEventListener('mouseout', () => {
        item.style.width = '';
        item.style.height = '';
        item.style.transition = '0.5';
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