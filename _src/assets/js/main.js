'use strict';

const inputEl= document.querySelector('#series');
const btnEl= document.querySelector('.btn');
const list= document.querySelector('.series__list');


function searchMovie(){
    const searchName = inputEl.value;
    
    fetch('http://api.tvmaze.com/search/shows?q=' + searchName)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        console.log(data[0].show);
        console.log(data[0].show.name);
        console.log(data[0].show.image.medium);
        console.log(data[3].show.image);
       
        for (let i=0; i<data.length; i++){
            const nameSerie = data[i].show.name;
            const urlImageNull = data[i].show.image;
            if (urlImageNull===null){
                const listElement= document.createElement('li');
                listElement.setAttribute('class', 'item');
                list.appendChild(listElement);
               
            
                const titleSeries= document.createElement('h2');
                titleSeries.setAttribute('class', 'title-series');
                const titleText= document.createTextNode(nameSerie);
                titleSeries.appendChild(titleText);
                listElement.appendChild(titleSeries);
            
                const imgSeries= document.createElement('img');
                imgSeries.setAttribute('src', "https://via.placeholder.com/210x295/ffffff/666666/?text=TV");
                imgSeries.setAttribute('alt', nameSerie);
                listElement.appendChild(imgSeries);
                
            }
            else{
                const urlImage = data[i].show.image.medium;
            
                const listElement= document.createElement('li');
                listElement.setAttribute('class', 'item');
                list.appendChild(listElement);
              
            
                const titleSeries= document.createElement('h2');
                titleSeries.setAttribute('class', 'title-series');
                const titleText= document.createTextNode(nameSerie);
                titleSeries.appendChild(titleText);
                listElement.appendChild(titleSeries);
            
                const imgSeries= document.createElement('img');
                imgSeries.setAttribute('src', urlImage);
                imgSeries.setAttribute('alt', nameSerie);
                listElement.appendChild(imgSeries);
                
            }
        }
    })
 }
 btnEl.addEventListener('click', searchMovie);


 
