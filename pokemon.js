// Array of Pokémon objects with name, cp, type, and xp
const pokemonList = [
  { name: "Charmander", cp: 750, type: "Fire", xp: 1800 },
  { name: "Squirtle", cp: 800, type: "Water", xp: 1900 },
  { name: "Pikachu", cp: 600, type: "Electric", xp: 1500 },
  { name: "Eevee", cp: 500, type: "Normal", xp: 1200 },
  { name: "Psyduck", cp: 450, type: "Water", xp: 1000 },
  { name: "Bulbasaur", cp: 850, type: "Grass", xp: 2000 },
  { name: "Growlithe", cp: 700, type: "Fire", xp: 1700 },
  { name: "Oddish", cp: 400, type: "Grass", xp: 900 }
];

// Trainer object
let trainer = {
  name: "Ash Ketchum",
  ownedPokemon: [],
  pokeballs: 10,
  xp: 0
};

// Task 1: Filter Grass-type Pokémon
// Instruction: Create a function called `filterGrassPokemon` that uses a loop to create a new array containing only Grass-type Pokémon from `pokemonList`. Loop through `pokemonList`, check each Pokémon's type, and add Grass-type Pokémon to the new array. Log the result to the console and return the array.


function filterGrassPokemon(){
    const grassPokemon = [];
    for (let i =0; i < pokemonList.length; i++){
        if (pokemonList[i].type === "Grass" ){
            grassPokemon.push(pokemonList[i])
        }
    }
    console.log("Grass type Pokemon: ", grassPokemon)
    return grassPokemon
}


// Task 2: Find Pokémon with Highest CP
// Instruction: Create a function called `findHighestCP` that uses a loop to find the Pokémon with the highest CP in `pokemonList`. Log the result to the console and return the Pokémon.

function findHighestCP(){
    let highestCP = pokemonList[0];
    for (let i = 1; i < pokemonList.length; i++){
        if (pokemonList[i].cp > highestCP.cp){
            highestCP = pokemonList[i]
            console.log("highest CP in loop:", highestCP)
        }
    }
    console.log("Final Highest CP: ", highestCP)
    return highestCP
}

// Task 3: Find Pokémon with Lowest CP
// Instruction: Create a function called `findLowestCP` that uses a loop to find the Pokémon with the lowest CP in `pokemonList`. Log the result to the console and return the Pokémon.
 
function findLowestCP() {
    let lowestCP = pokemonList[0];
    for (let i = 1; i < pokemonList.length; i++){
        if (pokemonList[i].cp < lowestCP.cp){
            lowestCP = pokemonList[i]
            console.log("lowest CP in loop: ", lowestCP)
        }
    }
    console.log("Final Lowest CP Pokemon: ", lowestCP)
    return lowestCP
}


// Task 4: Spawn a Random Pokémon
// Instruction: Create a function called `spawnRandomPokemon` that randomly selects a Pokémon from `pokemonList` and returns it.

function spawnRandomPokemon(){
    const randomIndex = Math.floor(Math.random() * pokemonList.length)
    const pokemon = pokemonList[randomIndex]
    console.log("Randomly generated Pokemon: ", pokemon)
    return pokemon
}


// Task 5: Catch a Pokémon
// Instruction: Create a function called `catchPokemon` that:
// - Calls `spawnRandomPokemon` and assigns the result to a variable called `pokeball`.
// - Creates a variable that randomly selects the number of Pokéballs used (1-3).
// - Checks if the trainer has enough Pokéballs.
// - If enough Pokéballs, deducts the used Pokéballs, adds the Pokémon to `trainer.ownedPokemon`, and adds the Pokémon's XP to `trainer.xp`. Log the result.
// - If not enough Pokéballs, logs an error message.

function catchPokemon(){
    const pokeball = spawnRandomPokemon();
    const pokeballsUsed = Math.floor(Math.random() * 3) + 1;
    console.log( "POKEBALLS USED:", pokeballsUsed)
    if (trainer.pokeballs >= pokeballsUsed){
        trainer.pokeballs = trainer.pokeballs - pokeballsUsed;
        trainer.ownedPokemon.push(pokeball);
        trainer.xp = trainer.xp + pokeball.xp;
        console.log(`Caught ${pokeball.name}! Used ${pokeballsUsed} Pokeball(s). Trainer XP: ${trainer.xp}, Pokeballs left: ${trainer.pokeballs}`)
    } else {
        console.log(`Not enough Pokeballs to catch ${pokeball.name}! Need ${pokeballsUsed}, have ${trainer.pokeballs}`)
    }
}

// Task 6: Visit Pokéstop
// Instruction: Create a function called `pokeStop` that randomly adds 3-10 Pokéballs to `trainer.pokeballs`. Log the number of Pokéballs gained and the new total.

function pokeStop(){
    const pokeballsGained = Math.floor(Math.random() * 8) + 3;
    trainer.pokeballs = trainer.pokeballs + pokeballsGained;
    console.log(`Visited a Pokestop! Gained ${pokeballsGained} Pokeballs. Total: ${trainer.pokeballs}`)
}

// Task 7: Display Owned Pokémon Stats
// Instruction: Create a function called `displayOwnedPokemonStats` that:
// - Checks if `trainer.ownedPokemon` is empty. If so, logs "No Pokémon caught yet!" and returns.
// - Uses a loop to find the Pokémon with the highest and lowest CP in `trainer.ownedPokemon`.
// - Logs the highest and lowest CP Pokémon.

function displayOwnedPokemonStats(){
    if (trainer.ownedPokemon.length === 0){
        console.log("No Pokemon caught yet!")
            return;
    }

    let highestCPOwned = trainer.ownedPokemon[0];
    let lowestCPOwned = trainer.ownedPokemon[0];
    for (let i =  1; i < trainer.ownedPokemon.length; i++){
        const currentPokemon = trainer.ownedPokemon[i];
        if (currentPokemon.cp > highestCPOwned.cp){
            highestCPOwned = currentPokemon
        }
        if (currentPokemon.cp < lowestCPOwned.cp){
            lowestCPOwned = currentPokemon;
        }
    }
    console.log("Highest CP Owned Pokemon: ", highestCPOwned)
    console.log("Lowest CP Owned Pokemon: ", lowestCPOwned)
}


// Example usage to test your functions
// console.log("Initial Trainer Stats:", trainer);
// filterGrassPokemon();
// findHighestCP();
// findLowestCP();
catchPokemon();
catchPokemon();
pokeStop();
catchPokemon();
displayOwnedPokemonStats();