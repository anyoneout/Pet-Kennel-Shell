let createPet = {
  name: "Tawook",
  species: "cat",
  happiness: 50,
  energy: 100,
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
    return `${this.name} has rested. Energy is now fully restored to ${this.enegery}.`;
  }
}

console.log(createPet.status());
console.log(createPet.play());
console.log(createPet.status());
console.log(createPet.feed());
console.log(createPet.status());
console.log(createPet.rest());
console.log(createPet.status());
