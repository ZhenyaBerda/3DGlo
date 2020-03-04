'use strict';

import "@babel/polyfill";
import "formdata-polyfill";
import "es6-promise";
import elementClosest from "element-closest";
import 'nodelist-foreach-polyfill';
import "fetch-polyfill";
elementClosest(window);

import countTimer from './modules/countTimer';
countTimer('12 mar 2020');
import toggleMenu from './modules/toggleMenu';
import scrollBtn from './modules/scrollBtn';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import switchImg from './modules/switchImg';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

toggleMenu();
scrollBtn();
togglePopup();
tabs();
slider();
switchImg();
calculator(100);
sendForm();