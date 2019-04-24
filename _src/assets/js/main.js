"use strict";

const inputEl = document.querySelector("#series");
const btnEl = document.querySelector(".btn");
const list = document.querySelector(".series__list");
const favList = document.querySelector(".fav__list");
const favSectionEl = document.querySelector(".fav_section");
let arrFav = [];

function searchMovie() {
  const searchName = inputEl.value;

  fetch("http://api.tvmaze.com/search/shows?q=" + searchName)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      

      list.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const nameSerie = data[i].show.name;
        const urlImageNull = data[i].show.image;
        const genreSerie=data[i].show.genres;
        if (urlImageNull === null) {
          //li
          const listElement = document.createElement("li");
          listElement.setAttribute("class", "item");
          list.appendChild(listElement);
          listElement.addEventListener('click', addNameToConsole);
          //listElement.addEventListener("click", addFavorite);
          //título
          const titleSeries = document.createElement("h2");
          titleSeries.setAttribute("class", "title-series");
          const titleText = document.createTextNode(nameSerie);
          titleSeries.appendChild(titleText);
          listElement.appendChild(titleSeries);
        
          //imagen
          const imgSeries = document.createElement("img");
          imgSeries.setAttribute(
            "src",
            "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
          );
          imgSeries.setAttribute("alt", nameSerie);
          listElement.appendChild(imgSeries);
            // Genre
            for (let i=0; i<genreSerie.length; i++){
              const genreSeries = document.createElement("p");
              genreSeries.setAttribute("class", "genre-series");
              const genreText = document.createTextNode(genreSerie[i]);
              genreSeries.appendChild(genreText);
              listElement.appendChild(genreSeries);
            }
        } else {
          const urlImage = data[i].show.image.medium;
          //li
          const listElement = document.createElement("li");
          listElement.setAttribute("class", "item");
          list.appendChild(listElement);
          listElement.addEventListener('click', addNameToConsole);
          //listElement.addEventListener("click", addFavorite);
          //titulo
          const titleSeries = document.createElement("h2");
          titleSeries.setAttribute("class", "title-series");
          const titleText = document.createTextNode(nameSerie);
          titleSeries.appendChild(titleText);
          listElement.appendChild(titleSeries);
          //imagen
          const imgSeries = document.createElement("img");
          imgSeries.setAttribute("src", urlImage);
          imgSeries.setAttribute("alt", nameSerie);
          listElement.appendChild(imgSeries);
          //Genres
          for (let i=0; i<genreSerie.length; i++){
            const genreSeries = document.createElement("p");
            genreSeries.setAttribute("class", "genre-series");
            const genreText = document.createTextNode(genreSerie[i]);
            genreSeries.appendChild(genreText);
            listElement.appendChild(genreSeries);
          }
        }
      }
    });
}
btnEl.addEventListener("click", searchMovie);

function addNameToConsole(event){
  const chosenMovie = event.currentTarget;
  console.log(chosenMovie);
  const title = chosenMovie.querySelector('.title-series') 
  title.innerHTML
  console.log(title.innerHTML);

}



function addFavorite(event) {
  const selected = event.currentTarget;
  selected.classList.toggle("selected");
  addToFavList();
  addLocalStorage();
}

function addToFavList() {
  const objFav = {};
  objFav.title = event.currentTarget.children[0].innerText;
  objFav.src = event.currentTarget.children[1].src;
  arrFav.push(objFav);
  //li
  const listFavElement = document.createElement("li");
  listFavElement.setAttribute("class", "fav-item");
  favList.appendChild(listFavElement);
  //título
  const titleFav = document.createElement("h3");
  titleFav.setAttribute("class", "fav_title");
  const titleFavContent = document.createTextNode(objFav.title);
  titleFav.appendChild(titleFavContent);
  listFavElement.appendChild(titleFav);
  //imagen
  const imgFav = document.createElement("img");
  imgFav.setAttribute("src", objFav.src);
  imgFav.setAttribute("class", "fav_img");
  imgFav.setAttribute("alt", objFav.title);
  listFavElement.appendChild(imgFav);
}
//Local Storage
function addLocalStorage() {
  const arrFavString = localStorage.setItem(
    "arrFavString",
    JSON.stringify(arrFav)
  );
}

function getLocalStorage() {
  const arrFavString = localStorage.getItem("arrFavString");
  if (arrFavString) {
    const arrFavParse = JSON.parse(arrFavString);
    console.log(arrFavParse[0].title);
    for (let i = 0; i < arrFavParse.length; i++) {
      const listFavElement = document.createElement("li");
      listFavElement.setAttribute("class", "fav-item");
      favList.appendChild(listFavElement);
      //título
      const titleFav = document.createElement("h3");
      titleFav.setAttribute("class", "fav_title");
      const titleFavContent = document.createTextNode(arrFavParse[i].title);
      titleFav.appendChild(titleFavContent);
      listFavElement.appendChild(titleFav);
      //imagen
      const imgFav = document.createElement("img");
      imgFav.setAttribute("src", arrFavParse[i].src);
      imgFav.setAttribute("class", "fav_img");
      imgFav.setAttribute("alt", arrFavParse[i].title);
      listFavElement.appendChild(imgFav);
    }
    return arrFavParse;
  }
}

reloadPage();

function reloadPage() {
  getLocalStorage();
}
