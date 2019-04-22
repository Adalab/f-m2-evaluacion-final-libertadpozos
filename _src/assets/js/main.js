'use strict';


const inputEl= document.querySelector('#series');
const btnEl= document.querySelector('.btn');
const list= document.querySelector('.series__list');
const favList= document.querySelector('.fav__list');


function searchMovie(){
    const searchName = inputEl.value;
    
    fetch('http://api.tvmaze.com/search/shows?q=' + searchName)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
       
        for (let i=0; i<data.length; i++){
            const nameSerie = data[i].show.name;
            const urlImageNull = data[i].show.image;
            if (urlImageNull===null){
                const listElement= document.createElement('li');
                listElement.setAttribute('class', 'item');
                list.appendChild(listElement);
                listElement.addEventListener('click', addFavorite);

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
                listElement.addEventListener('click', addFavorite);

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


function addFavorite(event){
 const selected=event.currentTarget;
 selected.classList.toggle('selected');
 addToFavList();
 
}

const favSectionEl= document.querySelector('.fav_section');

function addToFavList(){
    const arrFav=event.currentTarget.children;
    console.log(arrFav);
    
    for(let i=0; i<arrFav.length; i++){
   
     const listFavElement= document.createElement('li');
     listFavElement.setAttribute('class', 'fav-item');
     favList.appendChild(listFavElement);
     const titleFavSeries= arrFav[i];
     favList.appendChild(titleFavSeries);
     const favImg= arrFav[i];
     favList.appendChild(favImg);
   }
   }
  


   //TITULO de FAV SECTION

//    const titleSection= document.createElement('h2');
//    titleSection.setAttribute('class', 'fav-title-section');
//    const titleFavSection= document.createTextNode('Mis series favoritas');
//    favSectionEl.appendChild(titleFavSection);