'use strict';

const inputEl= document.querySelector('#series');
const btnEl= document.querySelector('.btn');
const list= document.querySelector('.series__list');

const arrFav=[];

function searchMovie(){
    const searchName = inputEl.value;
    
    fetch('http://api.tvmaze.com/search/shows?q=' + searchName)
    .then(response=>response.json())
    .then(data=>{
        
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
         //addFavoritetoList();
    })
 }
 btnEl.addEventListener('click', searchMovie);

 
function addFavorite(event){
 const selected=event.currentTarget;
 selected.classList.toggle('selected');

 const listElements=document.querySelectorAll('.item');
 console.log(listElements);
 for (let i=0; i<listElements.length; i++){
     if (listElements[i].classList.contains('selected')){
        console.log(listElements[i]); 
        arrFav.push(listElements[i]);
        console.log(arrFav);
     }
    //  else if (!listElements[i].classList.contains('selected')){
    //      arrFav.remove(listElements[i]);
    //  }
 }


//  console.log(event.currentTarget.children);
//  let arr=[];
//  let newArray= arr.push(event.currentTarget.children);
//  console.log(newArray);
}

//  function addFavoritetoList(){ 
//      const listElements=document.querySelectorAll('.item');
//      console.log(listElements);
//      for (let i=0; i<listElements.length; i++){
//          if (listElements[i].classList.contains('selected')){
//             console.log(listElements[i].classList.contains('selected')); 
//             // let arr=[];
//             // let newArr= arr.push(listElements[i]);
//             // console.log(arr);
//          }
//      }    
//  }

