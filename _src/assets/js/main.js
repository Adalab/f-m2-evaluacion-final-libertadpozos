'use strict';

const inputEl= document.querySelector('#movie');
const btnEl= document.querySelector('.btn');
const list= document.querySelector('.movie__list');


function searchMovie(){
    const movieName = inputEl.value;
    console.log(movieName);

 }

 btnEl.addEventListener('click', searchMovie);
