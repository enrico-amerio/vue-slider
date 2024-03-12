const imgTitle = document.querySelector('.title');
const imgSubtitle = document.querySelector('.subtitle')
const containerImg = document.querySelector('.container-img');
const cards = [
  {
    photo: 'img/01.webp',
    title: 'Spiderman',
    description:'Web-swinging protector of justice.',
  },
  {
    photo: 'img/02.webp',
    title: 'Ratchet & Clank',
    description: 'Dynamic duo saving the galaxy.',
  },
  {
    photo: 'img/03.webp',
    title: 'Fortnite',
    description:'Battle royale frenzy in Fortnite.',
  },
  {
    photo: 'img/04.webp',
    title: 'Puss in Boots',
    description: 'Charming, suave, daring feline hero.',
  },
  {
    photo: 'img/05.webp',
    title: 'The Avengers',
    description:'Superheroes unite, saving the world.',
  }
];
let counterImg = 0;
const containerPreview = document.querySelector('.container-preview');
const carosel = document.querySelector('.carosel');
let allowNext = true;

for(card of cards){
  containerImg.innerHTML += `<img class="img d-none" src="${card.photo}">`;
  containerPreview.innerHTML += `<img class="preview dark" src="${card.photo}">`;
  containerImg.innerHTML += `<h1 class="title d-none">${card.title}</h1><p class="subtitle d-none">${card.description}</p>`;
}


setInterval(goNext, 3000);

carosel.addEventListener('mouseover', () => {
  allowNext = false;
});

carosel.addEventListener('mouseout', () => {
  allowNext = true;
});

const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const itemCollection = document.getElementsByClassName('img');
itemCollection[counterImg].classList.remove('d-none');
const previewCollection = document.getElementsByClassName('preview');
previewCollection[counterImg].classList.remove('dark');
const titleCollection = document.getElementsByClassName('title')
titleCollection[counterImg].classList.remove('d-none');
const subtitleCollection = document.getElementsByClassName('subtitle')
subtitleCollection[counterImg].classList.remove('d-none');


btnUp.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('d-none');
  titleCollection[counterImg].classList.add('d-none');
  subtitleCollection[counterImg].classList.add('d-none');
  previewCollection[counterImg].classList.add('dark');
  previewCollection[counterImg].classList.add('dark');
  
  counterImg--
  if (counterImg < 0) {
    counterImg = cards.length - 1;
  } 

    itemCollection[counterImg].classList.remove('d-none');
    previewCollection[counterImg].classList.remove('dark');
    titleCollection[counterImg].classList.remove('d-none');
    subtitleCollection[counterImg].classList.remove('d-none');



  
} )
btnDown.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('d-none');
  previewCollection[counterImg].classList.add('dark');
  titleCollection[counterImg].classList.add('d-none');
  subtitleCollection[counterImg].classList.add('d-none');

  counterImg++
  if (counterImg > cards.length -1 ) {
    counterImg = 0;
  } 
  itemCollection[counterImg].classList.remove('d-none');
  previewCollection[counterImg].classList.remove('dark');
  titleCollection[counterImg].classList.remove('d-none');
  subtitleCollection[counterImg].classList.remove('d-none');


} )

function goNext() {
  if (!allowNext) return;
  itemCollection[counterImg].classList.add('d-none');
  previewCollection[counterImg].classList.add('dark');
  titleCollection[counterImg].classList.add('d-none');
  subtitleCollection[counterImg].classList.add('d-none');
  
  counterImg++
  if (counterImg > cards.length -1 ) {
    counterImg = 0;
  } 
  itemCollection[counterImg].classList.remove('d-none');
  previewCollection[counterImg].classList.remove('dark');
  titleCollection[counterImg].classList.remove('d-none');
  subtitleCollection[counterImg].classList.remove('d-none');


}
