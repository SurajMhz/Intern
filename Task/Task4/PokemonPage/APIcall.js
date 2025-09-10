export async function getPokemon(name){
     
      let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //   let error=null;
      if(!result.ok){
        return null;
      }

      else{
        return await result.json();
      }
    }