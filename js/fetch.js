import axios from "../node_modules/axios/dist/esm/axios.js";
const content = document.querySelector("body");
const main = document.createElement("main");
content.append(main)
 const div = document.createElement("div");



let i = 0;
axios.get('https://pokeapi.co/api/v2/pokemon')
.then(res => {
    res.data.results.forEach(ele =>  {
        const card = document.createElement("figure");
        i++;
        card.innerHTML = `
        <a class="more" href ="/pokemon.html?id=${ele.url.slice(34,-1)}">${ele.name}</a>
        <a href ="/pokemon.html?id=${ele.url.slice(34,-1)}"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="image"></a>
        `
        main.append(card);
    })
}) 

div.innerHTML = `<header>
<img src="img/pokemon-logo-text-png-7.png" alt="image">
</header>`
main.append(div);


