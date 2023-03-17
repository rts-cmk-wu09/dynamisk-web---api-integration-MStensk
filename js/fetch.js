const content = document.querySelector("body");
const main = document.createElement("main");
content.append(main)
 const div = document.createElement("div");



let i = 0;
fetch('https://pokeapi.co/api/v2/pokemon')
.then ((res) =>{
 return res.json();
}).then(data => {
    console.log(data.results);
    data.results.forEach(ele =>  {
        const card = document.createElement("figure");
        console.log(ele)
        i++;
        card.innerHTML = `
        <a class="more" href ="/pokemon.html?id=${ele.url.slice(34,-1)}">${ele.name}</a>
        <a href ="/pokemon.html?id=${ele.url.slice(34,-1)}"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="image"></a>
        `
        main.append(card);
    })
});

div.innerHTML = `<header>
<img src="img/pokemon-logo-text-png-7.png" alt="image">
</header>`
main.append(div);


