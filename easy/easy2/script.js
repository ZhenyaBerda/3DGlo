'use strict';

const getDeclination = function (number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

function get() {
    const date = new Date(),
        greeting = document.querySelector('.greeting'),
        today = document.querySelector('.today'),
        time = document.querySelector('.time'),
        newYear = document.querySelector('.new_year');


    function getGreeting() {
        const hour = date.getHours();

        function getTimesOfDay(time) {
            const timeOfDay = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'];
            return timeOfDay[time];
        }

        if (hour >= 6 && hour < 12) {
            return getTimesOfDay(0);
        }

        if (hour >= 12 && hour < 18) {
            return getTimesOfDay(1);
        }

        if (hour >= 18 && hour <= 23) {
            return getTimesOfDay(2);
        }

        if (hour >= 0 && hour < 6) {
            return getTimesOfDay(3);
        }
    }

    function getCurDay(curDate) {
        const days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[curDate.getDay()];
    }

    function getDaysBeforeNY() {
        const newYearDate = new Date('1 jan 2021').getTime(),
            timeRemaining = (newYearDate - date) / 1000,
            day = Math.floor(timeRemaining / 60 / 60 / 24);

        return `${day} ${getDeclination(day, ['день', 'дня', 'дней'])}`;
    }

    greeting.textContent = getGreeting();
    today.textContent = `Сегодня: ${getCurDay(date)}`;
    time.textContent = `Текущее время: ${date.toLocaleTimeString()}`;
    newYear.textContent = `До Нового года осталось: ${getDaysBeforeNY()}`;
}

get();
setInterval(get, 1000);