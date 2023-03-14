const content = document.querySelector("body");

fetch('https://pokeapi.co/api/v2/pokemon')
.then ((res) =>{
 return res.json();
}).then(data => {
    console.log(data.results);
    
    data.results.forEach(ele =>  {
        let card = document.createElement("h1");
        card.innerHTML = `<a class="more" href ="/pokemon.html?id=${ele.url.slice(34,-1)}">${ele.name}</a>`
        content.append(card);
    })
});

