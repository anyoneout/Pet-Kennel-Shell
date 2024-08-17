let mainKennel = [];
let catKennel = [];
let dogKennel = [];
let fishKennel = [];


function createPet(name, species, age) {
  let pet = {name,species,age,
    happiness: Math.floor(Math.random() * 51),
    energy: Math.floor(Math.random() * 51),
    playPet: function (randomNumber) {
      for (let i=0; i <= randomNumber; i++){
      this.happiness += 10;
      this.energy -= 15;
      console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`);
      }
    },
    feedPet: function() {
      this.happiness += 20;
      this.energy += 20;
      console.log(`${this.name} has been fed and their happiness is now ${this.happiness}!`);
      },
    status: function() {
      console.log(`Pet name: ${this.name} / Species: ${this.species} / Age: ${this.age} / Happiness: ${this.happiness} / Energy: ${this.energy}`);
    }
  }
  console.log("Created a pet...");
  pet.status();
  mainKennel.push(pet);
  return pet;
}

function petOrganizer(pet) {
  if (pet.species === "cat") {
catKennel.push(pet);
} else if (pet.species === "dog") {
    dogKennel.push(pet);
} else fishKennel.push(pet);
}


function petPlayer(currentKennel) {
  for (let i=0; i < currentKennel.length; i++){
    currentKennel[i].playPet(Math.floor(Math.random() * 3));
  }
}




function petFeeder(currentKennel){
for (let i =0; i < currentKennel.length; i++){
  while (currentKennel[i].energy < 30) {
    currentKennel[i].feedPet();
    currentKennel[i].status();
  } 
}
}

let pet1 = createPet("Swedgin", "cat", 12);
let pet2 = createPet("Nemo", "fish", 2);
let pet3 = createPet("Lily", "dog", 13);
let pet4 = createPet("Jane", "cat", 10);
let pet5 = createPet("Jaws", "fish", 23);
let pet6 = createPet("Potato", "dog", 12);
let pet7 = createPet("Billy", "fish", 64);
let pet8 = createPet("Tawook", "cat", 15);
let pet9 = createPet("Lassie", "dog", 10);
let pet10 = createPet("Manny", "cat", 14);
let pet11 = createPet("Moe", "fish", 53);
let pet12 = createPet("Jack", "dog", 42);
let pet13 = createPet("Anthony", "fish", 34);
let pet14 = createPet("Michael", "cat", 5);
let pet15 = createPet("Hall", "dog", 11);


petOrganizer(pet1);
petOrganizer(pet2);
petOrganizer(pet3);
petOrganizer(pet4);
petOrganizer(pet5);
petOrganizer(pet6);
petOrganizer(pet7);
petOrganizer(pet8);
petOrganizer(pet9);
petOrganizer(pet10);
petOrganizer(pet11);
petOrganizer(pet12);
petOrganizer(pet13);
petOrganizer(pet14);
petOrganizer(pet15);

console.table(catKennel);
console.table(dogKennel);
console.table(fishKennel);

fishKennel.forEach(pet => pet.status());

petPlayer(catKennel);
petPlayer(dogKennel);
petPlayer(fishKennel);

petFeeder(catKennel);
petFeeder(dogKennel);
petFeeder(fishKennel); 

console.table(mainKennel);