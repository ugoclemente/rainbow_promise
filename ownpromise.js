function setup(){
    ritardo(3000)
    .then(() => document.write("Hello"))
    .catch((err) => console.error(err));
}

function ritardo(tempo){    
    return new Promise((resolve, reject) => {
        if(isNaN(tempo)){
            reject(new Error('Ma che stai a ffaaaaa???'));
        }
        setTimeout(resolve,tempo);
    });
}

setup();