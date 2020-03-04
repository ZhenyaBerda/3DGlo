'use strict';

// popup
const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    let moveId, count;

    const movePopup = () => {
        moveId = requestAnimationFrame(movePopup);

        count += 5;

        if (popupContent.style.top !== '10%') {
            popupContent.style.top = `${count}%`;
        } else {
            cancelAnimationFrame(moveId);
        }

    };

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 768) {
                popupContent.style.top = `-100%`;
                count = -100;
                popup.style.display = 'block';
                movePopup();
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });

};

export default togglePopup;