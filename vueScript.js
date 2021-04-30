// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#root',
        data: {
            message: "Hello world",
            urlGrumpy: 'https://riotfest.org/wp-content/uploads/2019/05/grumpy-cat.jpg'
        }
    }
)
