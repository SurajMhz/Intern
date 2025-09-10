import {getPokemon} from "./APIcall.js"


let showContainer=document.querySelector(".showContainer");

let Button=document.querySelector(".Submit");
Button.addEventListener("click",Start);

async function Start(){
    let name=document.getElementById("pokemonName").value.toLowerCase()
    let data=await getPokemon(name);
    // let data=await res.json()
    showContainer.innerHTML=`
    <h2>${data.name.toUpperCase()}</h2>
    <img src="${data.sprites.front_default}">
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
    <p>Types: ${data.types.map(t=>t.type.name).join(", ")}</p>
    <p>Moves: ${data.moves.slice(0,5).map(m=>m.move.name).join(", ")}...</p>
    `
}