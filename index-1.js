let pet = {
  name: "Swedgin",
  species: "cat",
  happiness: 50,
  play: function () {
    this.happiness += 10;
    return `You played with ${this.name}! Happiness is now ${this.happiness}!`;
  },
  feed: function() {
    this.happiness += 20;
    return `You fed ${this.name}! Happiness is now ${this.happiness}`;
  },
  status: function() {
    return `Pet Name:${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`;
  },
  rename: function(newName) {
    this.name = newName;
    return `Your pet's new name is ${newName}!`;
  }
}

console.log(pet.status());
console.log(pet.play());
console.log(pet.status());
console.log(pet.feed());
console.log(pet.status());
console.log(pet.rename("Potato"));
console.log(pet.status());


