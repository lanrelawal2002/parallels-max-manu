// default parameters ***************
function greetUser(salutation, title, username = "Chinua Achebe") {
  // console.log(salutation + " " + title + " " + username);
  console.log(
    `Don't say ${salutation} to ${username} or the ${title} anymore.`,
  );
}

greetUser("Good afternoon", "Professor", "Jake");

// let age = null;
// console.log(age);

// null, NaN and undefined ****************
// let age;
// let time = null;

// const newAge = 12 + age;

// console.log(newAge);
// console.log(age);
// console.log(time);

// Rest parameters or Rest arguments ****************

// function sumUp(topUp, ...allScores) {
//   let finalResult = 0;

//   for (const score of allScores) {
//     finalResult += score;
//   }

//   return finalResult + topUp;
// }

// const startingFigures = [9, 7, 14, 0, 563, 206];

// console.log(sumUp(2, ...startingFigures));

// console.log(sumUp.name, sumUp.length);

// rest parameters redo
function sumUp(...scores) {
  let finalScore = 0;

  for (const score of scores) {
    finalScore += score;
  }

  return finalScore;
}

const someArray = [3, 7, 1, 2];

console.log(sumUp(...someArray));
