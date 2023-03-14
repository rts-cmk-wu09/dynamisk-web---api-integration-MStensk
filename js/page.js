const content = document.querySelector("section");
let current = 1;

fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
        return res.json();
    }).then(data => {
        
    });
