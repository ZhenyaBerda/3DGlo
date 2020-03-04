'use strict';

const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {

        let target = event.target;

        if (target.closest('.menu')) {
            handlerMenu();
            return;
        }

        if (target.closest('menu') && target.matches('a')) {
            event.preventDefault();
            handlerMenu();
            const href = target.getAttribute('href');

            if (href !== '#close') {
                document.querySelector(`${href}`).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
            return;
        }

        if (!target.closest('menu') && menu.classList.contains('active-menu')) {
            handlerMenu();
        }
    });
};

export default toggleMenu;