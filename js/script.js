const app = new Vue({
    el: '#root',
    data: {
        api: 'http://api.openweathermap.org/data/2.5/',
        api_key: '8729f9b5b6c1390f0388141aa7fa81e4',
        search: '',
        weather: {},
        background: '',
    },
    methods: {

        deleteSearch() {
            return this.search = '';
        },

        fetchWeather(e) {
            if (e.key == "Enter") {
                fetch(`${this.api}weather?q=${this.search}&appid=${this.api_key}`)
                    .then(res => {
                        return res.json();
                    }).then(this.saveCity).then(this.backGround).catch(error => {
                        error = `<h1 style='margin-top: 25%; text-align: center; color: red'> La città non esiste, scrivi correttamente e ricarica </h1>`;
                        document.write(error);
                    });
            } 
        },

        saveCity(res) {
            return this.weather = res;
        },

        backGround() {
            this.background = this.weather.weather[0].main.toLowerCase();
            //console.log(this.background);
        },

        date() {
            let d = new Date();
            let months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            let days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

            let day = days[d.getDay()];
            let month = months[d.getMonth()];
            let date = d.getDate();
            let year = d.getFullYear();
            let hour = d.getHours();
            let minute = d.getMinutes();
            let second = d.getSeconds();

            return `${day} ${date} ${month} ${year}, ${hour}:${minute}:${second}`;
        },

        imageBackground() {
            if (this.background == 'clouds') {
                //console.log(this.background);
                return "Amo le nuvole, mi ricordano come sia bello il sole. Le nuvole mimano quel che racconta il vento. Il cielo è completamente azzurro. Poi la prima nuvola mette timidamente fuori la testa, fiuta l'aria circostante, mentre le altre nuvole attendono il suo segnale.";
            } else if (this.background == 'rain') {
                //console.log(this.background);
                return "“La natura della pioggia è sempre la stessa, eppure fa nascere spine nel pantano e fiori in un giardino.” “Non piangere per me che parto, ma pensa che se domani piove me ne sono andato a cercare il Sole.” “Ci vogliono sia il sole sia la pioggia per fare un arcobaleno.” “Quando piove, diluvia.”";
            } else if (this.background == 'clear') {
                //console.log(this.background);
                return 'L’eternità è il mare mischiato col sole.';
            } else if (this.background == 'snow') {
               // console.log(this.background);
                return 'Chi cammina sulla neve non può nascondere il suo passaggio.';
            } else if (this.background == 'haze') {
                //console.log(this.background);
                return "Ognuno è solo. Nei giorni di nebbia puoi smettere per un attimo di guardare, puoi respirare, ed ascoltare… chiudi gli occhi e concentrati sulle tue sensazioni, perchè anche un giorno di nebbia non è per caso. I pittori di paesaggi vivono sino a tarda età perché la nebbia e le nubi offrono loro nutrimento.";
            };
        },

        temp() {
            let save = [Math.floor(this.weather.main.temp)];
            return save.toString().split('').slice(0, -1).join('');
        },

    },
})