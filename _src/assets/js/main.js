'use strict';

const inputEl= document.querySelector('#series');
const btnEl= document.querySelector('.btn');
const list= document.querySelector('.series__list');


function searchMovie(){
    const movieName = inputEl.value;
    console.log(movieName);


 }

 btnEl.addEventListener('click', searchMovie);
