'use strict';

// кнопка scroll
const scrollBtn = () => {
    const scrollBtn = document.querySelector('a');
    scrollBtn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#service-block').scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });

};

export default scrollBtn;