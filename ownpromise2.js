// let verso1 = "<h1>Nel mezzo del cammin di nostra vita</h1>";
// let verso2 = "<h1>mi ritrovai per una selva oscura</h1>";
// let verso3 = "<h1>ché la diritta via era smarrita...</h1>";
let p = document.createElement("h1");
let verso1 = document.createTextNode("Nel mezzo del cammin di nostra vita ");
let verso2 = document.createTextNode("mi ritrovai per una selva oscura ");
let verso3 = document.createTextNode("ché la diritta via era smarrita...");
p.appendChild(verso1);
p.appendChild(verso2);
p.appendChild(verso3);
document.body.appendChild(p);
// let divina = [verso1, verso2, verso3];
// for(var i = 1; 1 < 4; i++){
//     document.write(divina[i]);
// };

// function setup(){

//     let promises = [ritardo(1000), ritardo(1500), ritardo(2000)];
//     Promise.all(promises)
//     .then(() => {
//         for(var i = 1; 1 < 4; i++){
//             document.write(divina[i]);
//         };
//     })
//     .catch((err) => console.error(err));
// }

//     ritardo(1000)
//     .then(() => {
//         document.write("<h1>Nel mezzo del cammin di nostra vita</h1>");
//     })
//     .catch((err) => console.error(err));
    
//     ritardo(1500)
//     .then(() => {
//         document.write("<h1>mi ritrovai per una selva oscura</h1>");
//     })
//     .catch((err) => console.error(err));

//     ritardo(2000)
//     .then(() => {
//         document.write("<h1>ché la diritta via era smarrita...</h1>");
//     })
//     .catch((err) => console.error(err));
// }

// function ritardo(tempo){    
//     return new Promise((resolve, reject) => {
//         if(isNaN(tempo)){
//             reject(new Error('Ma che stai a ffaaaaa???'));
//         }
//         setTimeout(resolve,tempo);
        
//     });
// }

// setup();