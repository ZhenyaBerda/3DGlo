window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const move = document.querySelector('.move'),
        reset = document.querySelector('.reset'),
        stop = document.querySelector('.stop'),
        square = document.querySelector('.square');

    let moveInterval,
        count = 0;

    function stopMove() {
        cancelAnimationFrame(moveInterval);
    }

    function moveSquare() {

        moveInterval = requestAnimationFrame(moveSquare);
        count++;

        if (count < 1200) {
            square.style.left = `${count}px`;

        } else {
            cancelAnimationFrame(moveInterval);
        }

    }

    move.addEventListener('click', () => {
        // moveInterval = requestAnimationFrame(moveSquare);
        move.style.display = 'none';
        stop.style.display = 'inline-block';
        moveSquare();
    });

    stop.addEventListener('click', () => {
        stop.style.display = 'none';
        move.style.display = 'inline-block';
        stopMove();
    });

    reset.addEventListener('click', () => {
        cancelAnimationFrame(moveInterval);
        square.style.left = 0;
        count = 0;
    });

});