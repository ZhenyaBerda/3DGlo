'use strict';

//send-ajax-form

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    let animateId, count;

    const statusMessage = document.createElement('div');


    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    document.body.addEventListener('input', (event) => {
        const target = event.target;

        if (target.closest('input')) {
            if (target.getAttribute('name') === 'user_name' || target.matches('.mess')) {
                target.value = target.value.replace(/[^а-яё ]/ig, '');
            }

            if (target.getAttribute('type') === 'email') {
                target.value = target.value.replace(/[^a-z@\.]/ig, '');
            }

            if (target.getAttribute('type') === 'tel') {
                target.value = target.value.replace(/[^+0-9]/ig, '');
            }
        }
    });

    const successData = () => {
        clearInterval(animateId);
        statusMessage.textContent = '';
        const img = document.createElement('img');
        img.setAttribute('src', './images/done.png');
        img.style.cssText = 'height: 6rem;';
        statusMessage.appendChild(img);
    };

    const errorData = () => {
        clearInterval(animateId);
        statusMessage.style.cssText = `font-size: 2rem; color: #fff`;
        statusMessage.textContent = errorMessage;
    };

    // отправка формы
    document.body.addEventListener('submit', (event) => {
        statusMessage.textContent = '';
        const target = event.target;
        if (target.closest('form')) {
            event.preventDefault();
            const form = target.closest('form');

            form.appendChild(statusMessage);

            // анимация
            count = 0;
            statusMessage.style.cssText = `font-size: 6rem; color: #fff`;
            animateId = setInterval(() => {
                count = ++count % 3;
                statusMessage.textContent = `.${Array(count+1).join('.')}`;
            }, 500);


            const formData = new FormData(form);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network error');
                    }
                    successData();
                })
                .catch(errorData);

            form.reset();
        }
    });
};

export default sendForm;