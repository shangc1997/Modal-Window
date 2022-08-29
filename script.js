'use strict';

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
//class points to multiple element, button class
const btn_close_modal = document.querySelectorAll('.close-modal');
const btn_show_modal = document.querySelectorAll('.show-modal');

//click button to open modal
const open_button = function (modal_input) {
  modal_input.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btn_show_modal[0].addEventListener('click', () => open_button(modal1));
btn_show_modal[1].addEventListener('click', () => open_button(modal2));
btn_show_modal[2].addEventListener('click', () => open_button(modal3));

//click button to close modal and overlay
const close_button = function (modal_input) {
  modal_input.classList.add('hidden');
  overlay.classList.add('hidden');
};
btn_close_modal[0].addEventListener('click', () => close_button(modal1));
btn_close_modal[1].addEventListener('click', () => close_button(modal2));
btn_close_modal[2].addEventListener('click', () => close_button(modal3));

//close all modal and overlay
const close_all = function () {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

//click outside to close
overlay.addEventListener('click', () => close_all());

//keyboard esc button
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (
      !modal1.classList.contains('hidden') ||
      !modal2.classList.contains('hidden') ||
      !modal3.classList.contains('hidden')
    ) {
      close_all();
    }
  }
});
