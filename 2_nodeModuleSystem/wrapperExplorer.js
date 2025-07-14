console.log("Node module wrapper demo");

console.log("Filename in wrapper explorer", __filename);
console.log("Directory name in wrapper explorer", __dirname);

// * here we are directly exporting a function named greet from this module
module.exports.greet = function (name) {
  console.log(`Hello there ${name}`);
};
