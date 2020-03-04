'use strict';

// смена картинок в "Наша команда"
const switchImg = () => {
    const container = document.querySelector('.command');

    const switcher = (target) => {
        const src = target.src;
        target.src = target.dataset.img;
        target.dataset.img = src;
    };

    container.addEventListener('mouseover', (event) => {
        const target = event.target;

        if (target.matches('img')) {
            switcher(target);
        }

    });

    container.addEventListener('mouseout', (event) => {
        const target = event.target;
        if (target.matches('img')) {
            switcher(target);
        }
    });

};

export default switchImg;