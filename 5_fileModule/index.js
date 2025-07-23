// Importing the file system and the path module.
const fs = require("fs");
const path = require("path");

// Creating the directory for the data folder
const dataFolder = path.join(__dirname, "data");

// Checking if the dataFolder exists. If it doesn't we will create the dataFolder.
if (!fs.existsSync(dataFolder)) {
  // Creating the new folder.
  fs.mkdirSync(dataFolder);
  console.log("**Data Folder Created**");
}

// Creating the filePath
const filePath = path.join(dataFolder, "example.txt");
// Writing some text or content inside the file
fs.writeFileSync(filePath, "Hello from node js");
console.log("**File created successfully**");

// Reading the content of a file
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File Contents:", readContentFromFile);

// Adding content to the file
fs.appendFileSync(filePath, "\nThis is a new line added to the file");
console.log("**New line successfully added**");
