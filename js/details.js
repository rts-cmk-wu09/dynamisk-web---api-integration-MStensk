import axios from "../node_modules/axios/dist/esm/axios.js";

const params = new URLSearchParams(document.location.search);
var id = params.get("id");
const body = document.querySelector("body");

axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(res => {

    console.log(res.data.abilities[0].ability)
    document.querySelector("body").innerHTML += `
        <section>
            <a id="home" href ="/index.html">HOME</a>
            <figure>
            <h1 class ="pokemon">${res.data.name}</h1>
            <img src="${res.data.sprites.front_default}" alt="image">
            <img src="${res.data.sprites.back_default}" alt="image">
            <p>Shiny version</p>
            <img src="${res.data.sprites.front_shiny}" alt="image">
            <img src="${res.data.sprites.back_shiny}" alt="image">
            <ul><p class ="abilities">Abilities</p>
            <li>${res.data.abilities[0].ability.name}</li>
            </ul>
            <ul><p class ="stats">stats</p>
            <li>${res.data.stats[0].stat.name}: ${res.data.stats[0].base_stat}</li>
            <li>${res.data.stats[1].stat.name}: ${res.data.stats[1].base_stat}</li>
            <li>${res.data.stats[2].stat.name}: ${res.data.stats[2].base_stat}</li>
            <li>${res.data.stats[3].stat.name}: ${res.data.stats[3].base_stat}</li>
            <li>${res.data.stats[4].stat.name}: ${res.data.stats[4].base_stat}</li>
            <li>${res.data.stats[5].stat.name}: ${res.data.stats[5].base_stat}</li>
            </ul>
            </figure>
        </section>
        <footer><p>page number: ${id} of 20</p></footer>
        `;

})