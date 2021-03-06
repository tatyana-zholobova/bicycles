'use strict';
var pageBody = document.querySelector('.page-body');
var header = document.querySelector('.header');
var siteNavigation = document.querySelector('.header__site-navigation');
var buttonOpen = document.querySelector('.header__toggle--open');
var buttonClose = document.querySelector('.header__toggle--close');
var feedbackForm = document.querySelector('.feedback__form');
var telephoneInput = feedbackForm.querySelector('#telephone');

header.classList.remove('header--no-js');

buttonOpen.addEventListener('click', function () {
  siteNavigation.classList.remove('header__site-navigation--close');
  siteNavigation.classList.add('header__site-navigation--open');
  pageBody.classList.add('page-body--overlay');
});

function closeMenu() {
  siteNavigation.classList.remove('header__site-navigation--open');
  siteNavigation.classList.add('header__site-navigation--close');
  pageBody.classList.remove('page-body--overlay');
}

buttonClose.addEventListener('click', closeMenu);

telephoneInput.addEventListener('invalid', function () {
  if (telephoneInput.validity.patternMismatch) {
    telephoneInput.setCustomValidity('Введите 11-значный номер телефона');
  } else {
    telephoneInput.setCustomValidity('');
  }
});

siteNavigation.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'A') {
    closeMenu();
  }
});
