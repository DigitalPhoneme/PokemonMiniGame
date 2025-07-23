// Array of Pokémon objects with name, cp, type, and xp
const pokemonList = [
  { name: "Bulbasaur", cp: 850, type: "Grass", xp: 2000 },
  { name: "Charmander", cp: 750, type: "Fire", xp: 1800 },
  { name: "Squirtle", cp: 800, type: "Water", xp: 1900 },
  { name: "Pikachu", cp: 600, type: "Electric", xp: 1500 },
  { name: "Eevee", cp: 500, type: "Normal", xp: 1200 },
  { name: "Psyduck", cp: 450, type: "Water", xp: 1000 },
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

// Task 2: Find Pokémon with Highest CP
// Instruction: Create a function called `findHighestCP` that uses a loop to find the Pokémon with the highest CP in `pokemonList`. Log the result to the console and return the Pokémon.

// Task 3: Find Pokémon with Lowest CP
// Instruction: Create a function called `findLowestCP` that uses a loop to find the Pokémon with the lowest CP in `pokemonList`. Log the result to the console and return the Pokémon.

// Task 4: Spawn a Random Pokémon
// Instruction: Create a function called `spawnRandomPokemon` that randomly selects a Pokémon from `pokemonList` and returns it.

// Task 5: Catch a Pokémon
// Instruction: Create a function called `catchPokemon` that:
// - Calls `spawnRandomPokemon` and assigns the result to a variable called `pokeball`.
// - Creates a variable that randomly selects the number of Pokéballs used (1-3).
// - Checks if the trainer has enough Pokéballs.
// - If enough Pokéballs, deducts the used Pokéballs, adds the Pokémon to `trainer.ownedPokemon`, and adds the Pokémon's XP to `trainer.xp`. Log the result.
// - If not enough Pokéballs, logs an error message.

// Task 6: Visit Pokéstore
// Instruction: Create a function called `pokeStore` that randomly adds 3-10 Pokéballs to `trainer.pokeballs`. Log the number of Pokéballs gained and the new total.

// Task 7: Display Owned Pokémon Stats
// Instruction: Create a function called `displayOwnedPokemonStats` that:
// - Checks if `trainer.ownedPokemon` is empty. If so, logs "No Pokémon caught yet!" and returns.
// - Uses a loop to find the Pokémon with the highest and lowest CP in `trainer.ownedPokemon`.
// - Logs the highest and lowest CP Pokémon.

// Example usage to test your functions
// console.log("Initial Trainer Stats:", trainer);
// filterGrassPokemon();
// findHighestCP();
// findLowestCP();
// catchPokemon();
// catchPokemon();
// pokeStore();
// catchPokemon();
// displayOwnedPokemonStats();