//  importing the path module
const path = require("path");

// printing out the current directory of this index.js file
console.log("Directory Name: ", path.dirname(__dirname));

// Printing out the file name of this index.js file
console.log("File name: ", path.basename(__filename));

// Printing out file extension name of this index.js file
console.log("File Extension name: ", path.extname(__filename));

// Combining multiple path segments into one to create a relative or an absolute path
const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined Path: ", joinPath);

// Resolving a path. Means checking if the path exists or not.
const resolvedPath = path.resolve("/user", "documents", "nodes", "projects");
console.log("Resolved Path: ", resolvedPath);

// Normalizing a path. Means simplifying a path.
const normalizedPath = path.normalize("user/documents/../nodes");
console.log("Normalized Path", normalizedPath);
