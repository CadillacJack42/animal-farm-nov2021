// import functions and grab DOM elements
const catPic = document.getElementById('cat-pic');
const dogPic = document.getElementById('dog-pic');
const horsePic = document.getElementById('horse-pic');
const meow = document.getElementById('meow');
const woof = document.getElementById('woof');
const neigh = document.getElementById('neigh');

const lastPlay = document.getElementById('last-sound')


// initialize global state

catPic.addEventListener('click', () => {
  meow.play();
  lastPlay.textContent = 'You played the sound of a cat';
})


dogPic.addEventListener('click', () => {
  woof.play();
  lastPlay.textContent = 'You played the sound of a dog (Good Choice)';
})


horsePic.addEventListener('click', () => {
  neigh.play();
  lastPlay.textContent = 'You played the sound of a horse';
})

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
