'use strict';

function fetchDog(url){
  // let url = `https://dog.ceo/api/breed/${breed}/images/random/1`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(e => {
      $('#result').html(`<p id='error'>hmmm... something went wrong.</p>`)
    } )
}

function displayResults(responseJson){
  let status = responseJson.status
  let image = responseJson.message[0];
  if (status === 'error'){
    $('#result').html(`<p id='error'>Hmmm... Are you sure that's a real breed?</p>`);
  } else {
    $('#result').html(`<img src='${image}'alt='a very good dog'>`);
  }
  
}





function watchForm(){
  $(`#js-form`).submit(e => {
    e.preventDefault();
    // $('#result').replaceWith(' ');
    let breedVal = $('#breed').val();
    let breed = breedVal.toLowerCase();
    let goodness = $('#goodness').val();
    if (goodness === 'notgood'){
      $('#result').html('<p id="bad"> DOES NOT EXIST, FASCIST!</p> <p> All dogs are very good</p>')
    } else {
      fetchDog(`https://dog.ceo/api/breed/${breed}/images/random/1`);
    }
    
  }
  )
}

function feelingLucky(){
  $('#feelingLucky').click(e => {
    let url = `https://dog.ceo/api/breeds/image/random/1`;
    fetchDog(url);
  })
    
}
  






function onLoad(){
  watchForm();
  feelingLucky();
}

onLoad();