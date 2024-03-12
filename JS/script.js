const {createApp} = Vue;

createApp({
  data(){
    return{
      cards: [
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
      ],
      counter: 0,
      forward: true,
      isPlayerActive: true
    }
  },
  methods:{
    goNext(isNext){
      isNext ? this.counter++ : this.counter--;
      if(this.counter > this.cards.length -1){
        this.counter = 0
      }else if(this.counter < 0){
        this.counter = this.cards.length -1;
      }
    }
  },  
  mounted(){
    setInterval(() => { 
      if(this.isPlayerActive){
        this.goNext(this.forward);

      }
     }, 3000);
  }

}).mount('#app');




