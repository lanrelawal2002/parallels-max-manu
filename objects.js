// const job = {
//   title: "developer",
//   location: "New York",
//   salary: 82000,
// };

// console.log(new Date().toISOString());

// const job2 = {
//   title: "chef",
//   location: "Madrid",
//   salary: 59000,
// };

// const job3 = {
//   title: "fashion designer",
//   location: "Lagos",
//   salary: 150000,

//   describe() {
//     const title = "fashion designer";
//     const location = "Lagos";
//     const salary = 150000;

//     console.log(`I am a ${title} from ${location}. I earn ${salary} annually.`);
//   },
// };

// job3.describe();

// class Job {
//   constructor(title, place, salary) {
//     ((this.title = title), (this.location = place), (this.salary = salary));
//   }
// }

class Job {
  constructor(title, place, renumeration) {
    this.title = title;
    this.location = place;
    this.salary = renumeration;
  }

  describe() {
    console.log(
      `I am a ${this.title} from ${this.location}. I earn ${this.salary} weekly.`,
    );
  }
}

const developer = new Job("developer", "New York", 82000);
const chef = new Job("chef", "Madrid", 59000);

// const { location: city, salary: pay } = chef;

// console.log(`I live in ${city} and make ${pay} dollars a week`);

chef.describe();
