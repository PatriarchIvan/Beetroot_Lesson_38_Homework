"use strict";
const btn = document.querySelector('.btn_burger');
const block = document.querySelector('.nav__menu');

btn.onclick = () => {
    block.classList.toggle('active');
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 821) {
        block.classList.remove('active');
    };
})