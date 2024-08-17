### Assignment: Organizing and Feeding Pets in Multiple Kennels

#### Objective:
This assignment will help you practice organizing objects into different arrays and using a `for` loop to perform operations on each array.

#### Instructions:

1. **Create Pet Factory Function:**
   - Create a new file called `index-4.js`
   - You may copy/paste your work from day 3 or write it fresh for practice (recommended!)
   - Ensure your pet factory function can create pets with species like "Dog," "Cat," and "Fish," each with a `feed` method that increases the pet's happiness.

2. **Create Three Kennels:**
   - Create three arrays: `dogKennel`, `catKennel`, and `fishTank`.
   - Populate each array with at least five pets of the corresponding species using the pet factory function.

3. **Feed All Pets:**
   - Write separate `for` loops for each kennel (`dogKennel`, `catKennel`, `fishTank`).
   - Inside each loop, call the `feed` method for each pet in the kennel, logging a message like, "Feeding Rover! Happiness is now 80."

4. **Output the Final Status:**
   - After each loop, log the final status of every pet in the kennel using their `status` method.

Bonus Ideas:

   - Make your functions have some randomness involved to the degree they change the values of `energy` and `happiness`
   - Make some pets get "tired" faster than others.
   - Have a function that decreases happiness (like: `badDog`, or `bored`).
   - Try using the `forEach` method instead of `for`.

#### Submission:
Use git to commit and push your code. Your code for day 4 will be in the file `index-4.js`. Ensure your code is well-commented to explain what each part does.

#### Example Output:
```javascript
for (let i = 0; i < dogKennel.length; i++) {
  // TODO: Feed the dogs
}
// Output: "Feeding Rover! Happiness is now 80."
// Output: "Feeding Rex! Happiness is now 80."
// ...

for (let i = 0; i < catKennel.length; i++) {
  // TODO: Feed the cats
}
// Output: "Feeding Whiskers! Happiness is now 70."
// ...

for (let i = 0; i < fishTank.length; i++) {
  // TODO: Feed each of the fish
}
// Output: "Feeding Goldie! Happiness is now 60."
// ...
```

#### Evaluation Criteria (10 points):
- Correct creation and population of three distinct kennels. (5 points)
- Proper use of the `for` loop to iterate through each array and feed the pets. (3 points)
- Clear and concise comments explaining the code. (1 point)
- Successful output of the final status for all pets. (1 point)