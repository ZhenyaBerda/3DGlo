window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        let clockId;

        const getTimeRemaining = () => {

            const addZero = (number) => {
                let strNumber = number.toString();

                if (strNumber.length === 1) {
                    return `0` + strNumber;
                } else {
                    return strNumber;
                }
            };

            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = addZero(Math.floor(timeRemaining % 60)),
                minutes = addZero(Math.floor((timeRemaining / 60) % 60)),
                hours = addZero(Math.floor(timeRemaining / 60 / 60)) % 24;
            // day = Math.floor(timeRemaining / 60 / 60 / 24);

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        };

        const updateClock = () => {
            const timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining <= 0) {
                clearInterval(clockId);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

        };

        clockId = setInterval(updateClock, 1000);
    }

    countTimer('19 feb 2020');
});