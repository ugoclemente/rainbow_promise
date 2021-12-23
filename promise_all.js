// Creo un h1 e lo appendo al body
let p = document.createElement("h1");
document.body.appendChild(p);
// creo un array di stringhe e dichiaro una variabile "nodoverso"
let verso1 = "Nel mezzo del cammin di nostra vita ";
let verso2 = "mi ritrovai per una selva oscura ";
let verso3 = "ché la diritta via era smarrita...";
let versi = [verso1, verso2, verso3];
let nodoverso;

// Questa è la funzione setup, che fa partire le funzioni promise
function setup(){
    // Qui creo un array di promises, ne faccio partire 3
    // e con Promise.all chiedo di attendere la risoluzione 
    // di tutte le promises
    let promises = [ritardo(1000), ritardo(1500), ritardo(2000)];
    Promise.all(promises)
    .then(() => {
        // Quando le promises sono completate tutte appendo
        // i nodi di testo al nodo h1, tutti insieme
        for(var i = 0; i < 3; i++){
            nodoverso = document.createTextNode(versi[i]);
            p.appendChild(nodoverso);
        };
    })
    .catch((err) => console.error(err));
}

// Questa è la funzione della singola promise
function ritardo(tempo){    
    return new Promise((resolve, reject) => {
        if(isNaN(tempo)){
            reject(new Error('Ma che stai a ffaaaaa???'));
        }
        // La promise attende un intervallo temporale per la risoluzione
        setTimeout(resolve,tempo);
        
    });
}

setup();