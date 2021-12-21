var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=A3cpWCs7nNWi59E0m0759qG22codT9Ze";
var query = "&q=";
var url = api + apiKey + query;
var boredApi = "https://www.boredapi.com/api/activity"

function setup(){
    wordGIF()
    .then(results => {
        let ilmioHTML = '<h1>' + results.parolout + '</h1>';
        ilmioHTML += '<img src="' + results.fotout + '" alt="boh" width="500px"></img>';
        document.body.innerHTML = ilmioHTML;
    })
    .catch(err => console.error(err));
}

async function wordGIF (){
    let response1 = await fetch(boredApi);
    let json1 = await response1.json();
    let parola = json1.type;
    let response2 = await fetch(url + parola);
    let json2 = await response2.json();
    let tettuccio = json2.data.length; 
    let casuale = Math.floor(Math.random() * tettuccio);
    let foto = json2.data[casuale].images['fixed_height_small'].url;
    return{
        parolout:parola,
        fotout:foto
    }
}

setup();