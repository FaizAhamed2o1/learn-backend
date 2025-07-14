const lodash = require("lodash");
const names = ["faiz", "asha", "suraiya", "labiba", "ayman"];

const capitalizedNames = lodash.map(names, lodash.capitalize);

console.log(capitalizedNames);
