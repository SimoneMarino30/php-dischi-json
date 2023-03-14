// TRACCIA:
// Dobbiamo creare una web-app che permetta di leggere una lista di dischi presente nel nostro server.
// Stack
// Html, CSS, VueJS (importato tramite CDN), axios, PHP
// Consigli
// Nello svolgere l'esercizio seguite un approccio graduale.
// Prima assicuratevi che la vostra pagina index.php (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre "API").
// Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.
// Bonus
// Al click su un disco, recuperare e mostrare i dati del disco selezionato.

// VUE START
const { createApp } = Vue;

createApp({
  data() {
    return {
      discs_list: [
        {
          title: "New Jersey",
          author: "Bon Jovi",
          year: 1988,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/51sBr4IWDwL.jpg",
          genre: "Rock",
        },
        {
          title: "Live at Wembley 86",
          author: "Queen",
          year: 1992,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/71g40mlbinL._SX355_.jpg",
          genre: "Pop",
        },
        {
          title: 'Ten"s Summoner"s Tales',
          author: "Sting",
          year: 1993,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/411BQR6BHRL.jpg",
          genre: "Pop",
        },
        {
          title: "Steve Gadd band",
          author: "Steve Gadd Band",
          year: 2018,
          poster: "https://m.media-amazon.com/images/I/81UtLzBDoEL._SS500_.jpg",
          genre: "Jazz",
        },
        {
          title: "Brave new World",
          author: "Iron Maiden",
          year: 2000,
          poster:
            "https://upload.wikimedia.org/wikipedia/en/0/03/Iron_Maiden_-_Brave_New_World.jpg",
          genre: "Metal",
        },
        {
          title: "One more car, one more rider",
          author: "Eric Clapton",
          year: 2002,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/81MDAIdh78L._SY355_.jpg",
          genre: "Rock",
        },
      ],
    };
  },
  methods: {},
}).mount("#root");
