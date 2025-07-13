// * here we inport the "firstModule" inside the current file.
// * This is equivalent to "import firstModule as './firstModule.js'; "
const firstModule = require("./firstModule");

console.log(firstModule.add(2, 45));

try {
  console.log("trying to divide by 0");
  let result = firstModule.divide(0, 10);
  console.log(result);
} catch (error) {
  console.log("Caught an error: ", error.message);
}
