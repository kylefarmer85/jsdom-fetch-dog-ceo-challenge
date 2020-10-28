
  fetchDogs()
  fetchBreeds()

console.log('%c HI', 'color: firebrick')

function fetchDogs() {
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => getDogs(json));
}

function getDogs(dogs) {
  const dogContainer = document.getElementById('dog-image-container');
  dogs.message.forEach(dog => {
    const img = document.createElement('img')
    img.src = dog
    dogContainer.appendChild(img)
  })
}

function fetchBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => getBreeds(json));
}
const dogBreeds = document.getElementById("dog-breeds")

function getBreeds(breeds) {
  //need to return keys for breeds
  Object.keys(breeds.message).forEach(breed => {
    const li = document.createElement('li')
    li.innerText = breed
    dogBreeds.appendChild(li)
  })
}
const breeds = document.querySelector('#dog-breeds')

breeds.addEventListener("click", function(e) {
  e.target.style.color="red"
})

const dropdown = document.getElementById('breed-dropdown')

dropdown.addEventListener('change', function(e) {
  if (e.target.value === "a") {
    dogBreeds.filter(function(breed) {
      return breed[0] === 'a'
    })
  }
  
})
