let kennel = [];

function createPet(name, species, age) {
  let pet = {name,species,age,
    happiness: 50,
    restPet: function() {
      this.happiness = 100;
      console.log(`${this.name} has rested and their happiness is now ${this.happiness}!`)
    },
    status: function() {
      console.log(`Pet name: ${this.name} / Species: ${this.species} / Age: ${this.age} / Happiness: ${this.happiness}`)
    }
  }
  console.log("Created a pet...");
  pet.status();
  return pet;
}

let pet1 = createPet("Swedgin", "Cat", 12);
let pet2 = createPet("Jane", "Cat", 10);
let pet3 = createPet("Tawook", "dog", 15);
let pet4 = createPet("Lily", "Cat", 13);
let pet5 = createPet("Potato", "Dog", 7);
let pet6 = createPet("Broccoli", "Fish", 7);

kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);
kennel.push(pet4);
kennel.push(pet5);

kennel[5] = pet6;

console.table(kennel);

kennel[0].restPet();
kennel[1].restPet();
kennel[2].restPet();
kennel[3].restPet();

console.table(kennel);