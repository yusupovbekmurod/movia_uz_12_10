"use strict";



const elUserCard = document.querySelector(".wrapper_films");

for (let i = 0; i < films.length; i++) {

  const element = films[i];
  const newCard = document.createElement("div", "card");
  newCard.className = "card text-center";
  newCard.innerHTML = `
                  <img src="${element.poster}" alt="${element.title}">
                  <h5>ID: ${element.id}</h5>
                  <h5>Title: ${element.title}</h5>
                  <p><b>Overwiev: </b>${element.overview}</p>
                  <p><b>Relase date: </b>${new Date(element.release_date)} </p>
                  <p><b>Genres: </b>${element.genres}</p>            

  `;



  elUserCard.appendChild(newCard);
}




