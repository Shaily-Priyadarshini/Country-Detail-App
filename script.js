'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const p=document.querySelector('.p');
// setTimeout(function(){
//     p.textContent='My name is Priyadarshini';
// },5000);
// p.style.color='red';
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    //Json to javascript
    const data = JSON.parse(this.responseText);
    // console.log(data);
    // console.log(data[0].currencies[0].name)
    const html = `
    <article class="country">
          <img class="country__img" src="${data[0].flag}" />
          <div class="country__data">
            <h3 class="country__name">${data[0].name}</h3>
            <h4 class="country__region">${data[0].region}</h4>
            <p class="country__row"><span>👫</span>${(
              data[0].population / 1000000
            ).toFixed(1)}M</p>
            <p class="country__row"><span>🗣️</span>${
              data[0].languages[0].name
            }</p>
            
            <p class="country__row"><span>💰</span>${
              data[0].currencies[0].name
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('usa');
// getCountryData('turkey');
// getCountryData('iran');
// getCountryData('iraq');
// const arr=[{"name":["s","h"]},{"roll":9}]
// console.log(arr[0].name[0])
