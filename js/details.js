const params = new URLSearchParams(document.location.search);
var id = params.get("id");


fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then ((res) =>{
 return res.json();
}).then(data => {
    console.log(data)
    console.log(data.abilities[0].ability)
    document.querySelector("body").innerHTML += `
        <section>
            <figure>
            <h1 class ="pokemon">${data.name}</h1>
            <img src="${data.sprites.front_default}" alt="image">
            <img src="${data.sprites.back_default}" alt="image">
            <p>Shiny version</p>
            <img src="${data.sprites.front_shiny}" alt="image">
            <img src="${data.sprites.back_shiny}" alt="image">
            <ul><p class ="abilities">Abilities</p>
            <li>${data.abilities[0].ability.name}</li>
            </ul>
            <ul><p class ="stats">stats</p>
            <li>${data.stats[0].stat.name}: ${data.stats[0].base_stat}</li>
            <li>${data.stats[1].stat.name}: ${data.stats[1].base_stat}</li>
            <li>${data.stats[2].stat.name}: ${data.stats[2].base_stat}</li>
            <li>${data.stats[3].stat.name}: ${data.stats[3].base_stat}</li>
            <li>${data.stats[4].stat.name}: ${data.stats[4].base_stat}</li>
            <li>${data.stats[5].stat.name}: ${data.stats[5].base_stat}</li>
            </ul>
            </figure>
        </section>
        <footer><p>page number: ${id} of 20</p></footer>
        `;
});

