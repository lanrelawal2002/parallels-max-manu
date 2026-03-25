const age = 15;

let description = "sophomore";

if (age === 10) {
  description = "finalist";
}

// console.log(description);

const drinks = ["soda", "tea", "coffee", "lemonade"];

drinks.push("beer");

// console.log(drinks);

// explore object as a reference value

// const candidateInfo = { age: 90 };

// console.log(candidateInfo);

// candidateInfo.age -= 22;

// console.log(candidateInfo);

// example case

const employeeInfo = { age: 44 };

console.log(employeeInfo);

function reviewAge(sampleStaff) {
  sampleStaff.age -= 19;
  return sampleStaff.age;
  //   return sampleStaff.age - 19;
}

console.log(reviewAge({ ...employeeInfo }));
console.log(employeeInfo);
