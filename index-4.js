let mainKennel = [];
let catKennel = [];
let dogKennel = [];
let fishKennel = [];


function createPet(name, species, age) {
  let pet = {name,species,age,
    happiness: 50,
    feedPet: function() {
      this.happiness += 20;
      console.log(`${this.name} has fed and their happiness is now ${this.happiness}!`)
    },
    status: function() {
      console.log(`Pet name: ${this.name} / Species: ${this.species} / Age: ${this.age} / Happiness: ${this.happiness}`)
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

function petFeeder(kennel){
for (let i =0; i < kennel.length; i++){
  kennel[i].feedPet();
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
let pet15 = createPet("Haell", "dog", 11);


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

console.log(catKennel);
console.log(dogKennel);
console.log(fishKennel);

petFeeder(catKennel);
petFeeder(dogKennel);
petFeeder(fishKennel);

console.log(catKennel);
console.log(dogKennel);
console.log(fishKennel);


fishKennel.forEach(pet => pet.status());

console.log(mainKennel);
