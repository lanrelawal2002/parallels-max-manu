// asynchronous code and callback functions

// const fs = require("fs");
const fs = require("fs/promises");
const currentFile = "read txt file";
const newOperation = "separate";

// function readFirstFile() {
//   fs.readFile("data.txt", function (error, fileData) {
//     if (error) {
//       console.log(error);
//     }
//     console.log(fileData.toString());
//     console.log(`This ${currentFile} op ends the async readFile operation`);
//   });

//   console.log(
//     `This ${newOperation} op is started simultaneously with the async operation`,
//   );
// }

function readFile() {
  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log(fileData.toString());
      console.log(`This ${currentFile} ops ends the async readFile operations`);
      // return anotherAsyncOperation
    })
    .then(function () {})
    .catch(function (error) {
      console.log(error);
    });

  console.log(
    `This ${newOperation} op is started simultaneous with the async operation`,
  );
}

// readFile();

function reviewFile() {
  fs.readFile("rawdta.txt")
    .then(function (rawData) {
      console.log(rawData.toString());
    })
    .catch(function (error) {
      console.log("An error occured and has been logged!");
      // console.log(error);
    });

  console.log(
    "It's an asynchronous operation so this line is executed immediately",
  );
}

reviewFile();
