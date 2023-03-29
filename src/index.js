const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.writeFile(fileName, fileContent)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.readFile(fileName, (er, data))
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name

  fs.readFile(fileName,'utf8', (er, data))
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name

  fs.unlink(fileName)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
