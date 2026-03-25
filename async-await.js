const fs = require("fs/promises");

async function reviewFile() {
  try {
    const fileData = await fs.readFile("rwdata.txt");
    console.log(fileData.toString());
    console.log("The file has been read successfully!!");
  } catch (error) {
    console.log("An error occured.");
  }

  console.log("This line comes last because we used async-await.");

  //   const testData = await fs.readFile("data.txt");
  //   console.log(testData.toString());
  //   console.log("The second file has been read successfully!!");

  //   console.log("This line also comes last because we used async-await.");
}

reviewFile();
