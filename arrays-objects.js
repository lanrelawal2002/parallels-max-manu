// const regions = [
//   "Africa",
//   "Europe",
//   "South America",
//   "North America",
//   "Australia",
//   "Asia",
// ];

// const [mandela, dali, gonzalez] = regions;
// console.log(mandela);
// console.log(dali);
// console.log(gonzalez);

const job3 = {
  title: "fashion designer",
  location: "Lagos",
  salary: 150000,

  describe() {
    const title = "fashion designer";
    const location = "Lagos";
    const salary = 150000;

    console.log(`I am a ${title} from ${location}. I earn ${salary} annually.`);
  },
};

const { describe: define } = job3;
define();

// const { title: badge } = job3;
// const { salary: pay } = job3;
// console.log(pay);
