function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by 0 is not allowed");
  }

  return a / b;
}

// * Exporting multiple modules
module.exports = {
  add,
  substract,
  divide,
};

// // * module wrapper function
// function(exports, require, module, __fileName, __dirName){
//   // The module code goes here
// }
