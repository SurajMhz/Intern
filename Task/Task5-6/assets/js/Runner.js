import { getPokemon } from "../js/APIcall.js";

let pokemonList;

//making the view input button functional 
document.getElementById("viewBtn").addEventListener("click", () => { getName() });
//Making output in page
let container = document.querySelector(".pokemonConatiner");

if (localStorage.getItem("listData")) {
    pokemonList = JSON.parse(localStorage.getItem("listData"));
    displayList();
}
else {
    //Name of initial pokemon list
    pokemonList = [
        { name: "charizard", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", name: "charizard", type: "fire, flying", detail: "" },
        { name: "pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", name: "pikachu", type: "electric", detail: "" },
        { name: "dragonite", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png", name: "dragonite", type: "dragon, flying", detail: "" }
    ];
    localStorage.setItem("listData", JSON.stringify(pokemonList));
    displayList();
}


async function getName() {

    let name = document.getElementById("nameHolder").value.toLowerCase();
    let receive = await getPokemon(name);
    let pokemon = receive.Result;
    let pokemonDetail = receive.description;
    // let description=receive.Descpt;
    /* OUTPUT JSON TYPE
                {
            "types": [
                { "slot": 1, "type": { "name": "electric", "url": "..." } }
            ],
            "moves": [
                { "move": { "name": "mega-punch", "url": "..." } },
                { "move": { "name": "pay-day", "url": "..." } },
                { "move": { "name": "thunder-punch", "url": "..." } },
                ...
            ]
            }
    Description of pokemon
    code to get
    detail:pokemon.flavor_text_entries.find(e => e.language.name === "en")
    but url to get json is also change

    {
  "flavor_text_entries": [
    {
      "flavor_text": "When several of these POKéMON\ngather, their electricity could\nbuild and cause lightning storms.",
      "language": { "name": "en", "url": "https://pokeapi.co/api/v2/language/9/" },
      "version": { "name": "red", "url": "https://pokeapi.co/api/v2/version/1/" }
    },
    {
      "flavor_text": "It keeps its tail raised to monitor\nits surroundings. If you yank its tail,\nit will try to bite you.",
      "language": { "name": "en", "url": "https://pokeapi.co/api/v2/language/9/" },
      "version": { "name": "gold", "url": "https://pokeapi.co/api/v2/version/4/" }
    },
    {
      "flavor_text": "Quand plusieurs de ces Pokémon\nse rassemblent, leur électricité\npeut provoquer des orages.",
      "language": { "name": "fr", "url": "https://pokeapi.co/api/v2/language/5/" },
      "version": { "name": "red", "url": "https://pokeapi.co/api/v2/version/1/" }
    }
  ]
}

  */
    let current = { name: pokemon.name, image: pokemon.sprites.front_default, type: pokemon.types.map(t => t.type.name).join(", "), detail: pokemonDetail };

    // document.querySelector(".Ex").innerHTML=`<p>${pokemon.name}</p><img src="${pokemon.sprites.front_default}">`
    addPokemon(current);
}

function addPokemon(current) {
    pokemonList.push(current);
    displayList();
    localStorage.setItem("listData", JSON.stringify(pokemonList));
}

function displayList() {
    container.innerHTML = ``;
    pokemonList.forEach((p, i) => {
        let div = document.createElement("div");
        div.classList.add("pokemonItems");
        div.id = (p.name);

        let image = document.createElement("img");
        image.src = p.image;

        let name = document.createElement("p");
        name.innerHTML = "Name " + p.name + "<br>"
        name.classList.add("name")

        let type = document.createElement("p")
        type.textContent = "TYPE: " + p.type;
        type.classList.add("type");

        let detail = document.createElement("p");
        detail.innerHTML = p.detail;

        div.appendChild(image);
        div.appendChild(name);
        div.appendChild(type);
        div.appendChild(detail);
        container.appendChild(div)
        /*container.innerHTML+=`
        <hr>
       <div>
            <img src="${p.image}">
            <p>Name:${p.name} <br> TYPE:${p.type}</p>
            <button onclick="deletedata(${i})">Delete</button>
        </div>
        
        `*/
    })
}
// function deletedata(i){
//     pokemonList.forEach((p,d)=>{
//         if(d==i){
//             pokemonList.splice(d,1);
//         }
//     });
//     displayList();
//     // localStorage.setItem("listData", JSON.stringify(pokemonList));
// }


