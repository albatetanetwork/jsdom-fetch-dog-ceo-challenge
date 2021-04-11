console.log('%c HI', 'color: firebrick')
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(response=> response.json())
      .then(results => {
        results.message.forEach(image => addDogImage(image))
      });
  }

  function addDogImage(dogImgUrl) {
    const container = document.querySelector('#dog-image-container');
     newImageEl = document.createElement('img');
    newImageEl.src = dogImgUrl;
    container.appendChild(newImageEl);
  }
  const breeds = [];

  document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    
  });

  const breedUrl = "https://dog.ceo/api/breeds/list/all"
 fetch(breedUrl)
 .then(res=> res.json())
 .then(results => {

    breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
 })

 function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  