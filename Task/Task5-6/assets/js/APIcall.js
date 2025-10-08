export async function getPokemon(name){
     
      let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let desc=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);

      let pokemon=await result.json();
      let detail=await desc.json();
      //deatil of pokemon 
      let englishEntry = detail.flavor_text_entries.find(e => e.language.name === "en");
      let rawText = englishEntry ? englishEntry.flavor_text : "No description available";
    
      // replace \n and \f with <br>
      let description = rawText.replace(/\f/g, " ");
      // let description = htmlText.replace(/[\n\f]+/g, "<br> ");


    //   let error=null;
      if(!result.ok){
        return null;
      }

      else{
        return{
          Result:pokemon,
          Descpt:detail,
          description
        };
      }
    }