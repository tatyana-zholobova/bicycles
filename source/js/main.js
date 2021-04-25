'use strict';
const pageBody = document.querySelector('.page__body');
const header = document.querySelector('.header');
const siteNavigation = document.querySelector('.header__site-navigation');
const buttonOpen = document.querySelector('.header__toggle--open');
const buttonClose = document.querySelector('.header__toggle--close');

header.classList.remove('header--no-js');

buttonOpen.addEventListener('click', function () {
  siteNavigation.classList.remove('header__site-navigation--close');
  siteNavigation.classList.add('header__site-navigation--open');
  pageBody.classList.add('page__body--overlay');
});

buttonClose.addEventListener('click', function () {
  siteNavigation.classList.remove('header__site-navigation--open');
  siteNavigation.classList.add('header__site-navigation--close');
  pageBody.classList.remove('page__body--overlay');
});
