// erros, variable scoping and shadowing

const fs = require("fs");
const currentFile = "data JSON";

function readFile() {
  //   let shadowValue = 18;
  //   let fileData;

  try {
    // shadowValue += 2;
    // console.log(shadowValue + 2);
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log(`The ${currentFile} file was not found!`);
  }

  console.log("backup is now complete !!!");
  //   console.log(fileData);
  //   console.log(shadowValue);
}

readFile();
