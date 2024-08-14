

function createPet(petName, petSpecies, petHappiness, petEnergy) {
  let pet = {
    name: petName,
    species: petSpecies,
    happiness: petHappiness,
    energy: petEnergy,
    play: function () {
    this.energy -= 20;
    this.happiness +=10;
    return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}`;
    },
    feed: function () {
    this.happiness += 20;
    this.energy += 20;
    return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}`;
    },
    status: function () {
    return `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`;
    },
    rest: function () {
    this.energy = 100;
    return `${this.name} has rested. Energy is now fully restored to ${this.energy}.`;
    }
  }
  console.log("Created a cat...");
  pet.status();
  return pet;

}

let pet1 = createPet("Tawook", "cat", 50, 100);
let pet2 = createPet("Jane", "cat", 50, 100);
let pet3 = createPet("Swedgin", "cat", 50, 100);

console.log(pet1.status());
console.log(pet1.play());
console.log(pet1.status());
console.log(pet1.feed());
console.log(pet1.status());
console.log(pet1.rest());
console.log(pet1.status());

console.log(pet2.status());
console.log(pet2.play());
console.log(pet2.status());
console.log(pet2.feed());
console.log(pet2.status());
console.log(pet2.rest());
console.log(pet2.status());

console.log(pet3.status());
console.log(pet3.play());
console.log(pet3.status());
console.log(pet3.feed());
console.log(pet3.status());
console.log(pet3.rest());
console.log(pet3.status());

