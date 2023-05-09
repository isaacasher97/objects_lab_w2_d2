// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

// const obj:keywords used to create an object in your program
// {} - curly brackets are used to define the object
// name: Isaac - name is considered a key property of the object, whereas "Isaac" is considered a value of the key withing the object

//================================================================================

//     const me = { // 1. Create an empty object called me.
//         firstName: "Isaac",
//         lastName: "Asher", // 2. Assign it properties for firstName, lastName, age, and email with corresponding values.
//         age: 26,
//         email: "isaac.asher97@gmail.com",
//     }
//     let newMe = { // 4. Without writing directly into the object, update the value of age to be 1000 years old.
//         me,
//         age: 1000,
//         "place of residence": "Brooklyn, Ny", // 6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
//     }
//     console.log(me.firstName); // 3. Using dot notation, access the firstName property in your object.
//     console.log(newMe.age); // 5. Using dot notation, verify that age has been updated.
//     console.log(newMe["place of residence"]); // Access the value of "place of residence"
//     console.log(me) // returns => {firstName: "Isaac", lastName: "Asher",  age: 26, email: "isaac.asher97@gmail.com"}
// //================================================================================

// // Write a function called fancyGreeting that accepts your me object as an argument. The function should console.log a greeting using the firstName and lastName values from the me

//     function fancyGreeting() {
//         console.log(`Greetings, ${me.firstName} ${me.lastName}. Nice to meet you`);
//         }
//     fancyGreeting(me); // returns "Greetings, Isaac Asher, Nice to meet you"function fancyGreeting() console.log(`Greetings, ${firstName} ${lastName}. Nice to meet you`)

// //================================================================================

// {
//      //  Given the slimer object:
//     const monster = {
//         name: "Slimer",
//         color: "greenish",
//         type: "plasm or ghost or something"
//      }
   
//      console.log(monster.name);//  What would you write to access the name and console.log it?
//     let newMonster = {
//         ...monster,
//         type: "Creature",
//         age: 6, //  What would you write to add a key to the object called age, and set the age to 6?
//     }
//     console.log(newMonster); //  console.log the object to make sure type is creature, and age is 6     
// }

//========================================================================

// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
// Using objects, create models and have them interact.
// how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?

// how would you model an ogre? Your ogre will want hitpoints.

// Write a very small program that will simulate a battle between your adventurer and an ogre.

// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.
// Bonus: Try to accept user input for the game by running it in the Chrome console and using alerts and prompts

// Model the adventurer
// const adventurerName = prompt("What is your adventurer's name?");
// const adventurerHitpoints = prompt("How many hitpoints does your adventurer have?");
// const adventurer = {
//   name: adventurerName,
//   hitpoints: adventurerHitpoints,
//   attack: 10,
//   defense: 5
// };

// // Model the ogre
// const ogre = {
//   name: "Ogre",
//   hitpoints: 50,
//   attack: 15,
//   defense: 2
// };

// // Simulate the battle
// function battle(adventurer, ogre) {
//   let attacker, defender;
  
//   // Randomly select who attacks first
//   if (Math.random() < 0.5) {
//     attacker = adventurer;
//     defender = ogre;
//     console.log("You go first!");
//   } else {
//     attacker = ogre;
//     defender = adventurer;
//     console.log("The ogre goes first!");
//   }
  
//   // Battle loop
//   while (adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
//     let damage = attacker.attack - defender.defense;
//     damage = damage < 0 ? 0 : damage;
//     console.log(`${attacker.name} attacks ${defender.name} for ${damage} damage!`);
//     defender.hitpoints -= damage;
//     console.log(`${defender.name} has ${defender.hitpoints} hitpoints left.`);
    
//     // Swap attacker and defender
//     [attacker, defender] = [defender, attacker];
//   }
  
//   // Determine the winner
//   if (adventurer.hitpoints <= 0) {
//     alert("You died! Game over.");
//   } else {
//     alert("You won! Congratulations!");
//   }
// }

// battle(adventurer, ogre);

//========================================================================

const cat1 = {
    name: "Fluffy",
    breed: "Persian",
    age: 4
  };
  
  // console.log the cat's age
  console.log(cat1.age); // Output: 4
  
  // console.log the cat's breed
  console.log(cat1.breed); // Output: Persian
  
  // Define an object called cat2 that also contains the properties:
  // name, breed, age (a number)
  const cat2 = {
    name: "Simba",
    breed: "Siamese",
    age: 2
  };
  
  // Write a function combineCats that has two parameters mama, and papa.
  function combineCats(mama, papa) {
    // Create a new cat object with the combined properties
    const kitten = {
      name: mama.name + "-" + papa.name,
      breed: mama.breed + "-" + papa.breed,
      age: 1
    };
    
    // Return the new cat object
    return kitten;
  }
  
  // Call the combineCats function and pass cat1 and cat2 as arguments
  const kitten = combineCats(cat1, cat2);
  
  // Log the new kitten object
  console.log(kitten); // Output: { name: 'Fluffy-Simba', breed: 'Persian-Siamese', age: 1 }
  
  // Log the cat1 and cat2 objects
  console.log(cat1); // Output: { name: 'Fluffy', breed: 'Persian', age: 4 }
  console.log(cat2); // Output: { name: 'Simba', breed: 'Siamese', age: 2 }
 
  // Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
  
  console.log(combineCats(combineCats(cat1, combineCats(cat2, cat1)), combineCats(combineCats(cat2, cat1), combineCats(cat1, cat2))));

//========================================================================

