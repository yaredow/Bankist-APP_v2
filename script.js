'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const sec1Cords = section1.getBoundingClientRect();
  console.log();
  section1.scrollIntoView({ behavior: 'smooth' });
});


// Navigation links scrolling

document.querySelectorAll('.nav__links').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault()

    if(e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');  
      document.querySelector(id).scrollIntoView({behavior: 'smooth'})

    }
  })
})

// ////////////////////////////////////////////////////////////////
// 
const h1 = document.querySelector('h1')
console.log(h1.querySelectorAll('.highlight'));  
console.log(h1.childNodes);
h1.firstElementChild.style.color = 'white'
