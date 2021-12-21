var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=A3cpWCs7nNWi59E0m0759qG22codT9Ze";
var query = "&q=";
var url = api + apiKey + query;
var boredApi = "https://www.boredapi.com/api/activity"

function setup(){
    
    fetch(boredApi)
    .then(risposta => risposta.json())
    .then(json => {
        ilmioHTML = '<h1>' + json.type + '</h1>';
        return fetch(url + json.type);
    })
    .then(response => {
        return response.json();
    })
    .then(pippo => {
        let tettuccio = pippo.data.length; 
        let casuale = Math.floor(Math.random() * tettuccio);
        var indirizzoFoto = pippo.data[casuale].images['fixed_height_small'].url;
        console.log(indirizzoFoto);
        ilmioHTML += '<img src="' + indirizzoFoto + '" alt="boh" width="500px"></img>';
        document.body.innerHTML = ilmioHTML; 
    })
    .catch(orrore => console.error(orrore));
}










// function setup(){
    // Creazione di una promise: Vai a prendere (fetch)
    // i dati all'url, se la promise è risolta esegui
    // la funzione gotData, se è rigettata esegui
    // la funzione gotErr
    // fetch(url).then(gotData).catch(gotErr);
    
    // Se la promise è risolta, stampa i dati
    // function gotData(data){
    //     console.log(data);
    // }
    
    // Se la promise è rejected, stampa l'errore
//     function gotErr(err){
//         console.log(err);
//     }
// };

// Forma riassuntiva con aggiunta di altre funzioni then
// function setup(){
//     fetch(url).then(data => console.log(data))
//     .then(() => console.log("Seconda riga"))
//     .then(() => console.log("Terza riga"))
//     .then(() => console.log("Quarta riga"))
//     .then(() => console.log("Quinta riga"))
//     .catch(err => console.log(err));

// FOrma contratta con conversione in json (la funzione restituisce una Promise)
// noCanvas();
// fetch(url).then(response => response.json())
// .then(json => console.log(json))
// .then(() => console.log("Seconda riga"))
// .then(() => console.log("Terza riga"))
// .then(() => console.log("Quarta riga"))
// .then(() => console.log("Quinta riga"))
// .catch(err => console.log(err));
// }



setup();