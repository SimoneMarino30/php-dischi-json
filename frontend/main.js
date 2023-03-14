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
      discs_list: [],
      isActive: false,
    };
  },
  methods: {
    overlayOn() {
      this.isActive = !this.isActive;
      console.log(true);
    },
  },
  //   recupero (GET) info dalla API
  created() {
    // parte la richiesta per l'array
    axios
      .get("http://localhost/php-dischi-json/API/get-list.php")
      //   'riempio' il mio array vuoto con la resp
      .then((resp) => (this.discs_list = resp.data));
  },
}).mount("#root");
