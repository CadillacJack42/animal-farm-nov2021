// import functions and grab DOM elements
const catPic = document.getElementById('cat-pic');
const dogPic = document.getElementById('dog-pic');
const horsePic = document.getElementById('horse-pic');
const cat = document.getElementById('meow');
const dog = document.getElementById('woof');
const horse = document.getElementById('neigh');

const lastPlay = document.getElementById('last-sound');


// initialize global state

catPic.addEventListener('click', () => {
    myFunc(cat, 'cat');
});


dogPic.addEventListener('click', () => {
    myFunc(dog, 'dog');
});


horsePic.addEventListener('click', () => {
    myFunc(horse, 'horse');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'c'){
        myFunc(cat, 'cat');
    } else if (e.key === 'd'){
        myFunc(dog, 'dog');
    } else if (e.key === 'h'){
        myFunc(horse, 'horse');
    }
});


const myFunc = (animal, typeAnimal) => {
    animal.play();
    lastPlay.textContent = `You played the sound of a ${typeAnimal}`;
};