// EXAMPLE 1 - Count the number of files in a directory using Node.js

import fs from 'fs';

// 👇️ if you use the CommonJS require() syntax
// const fs = require('fs')

const pathToDirectory = './my-folder';

fs.readdir(pathToDirectory, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    console.log(files);
    console.log(files.length);
  }
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Count the number of files in a directory using Async/Await

// import {readdir} from 'fs/promises';

// // 👇️ if you use the CommonJS require() syntax
// // const {readdir} = require('fs/promises')

// async function countFilesInDirectory(dirPath) {
//   try {
//     const files = await readdir(dirPath);

//     console.log(files);

//     return files.length;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const pathToDirectory = './my-folder';

// countFilesInDirectory(pathToDirectory).then(count => {
//   console.log(count);
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count the number of files in a directory Synchronously in Node.js

// import {readdirSync} from 'fs';

// // 👇️ if you use the CommonJS require() syntax
// // const {readdirSync} = require('fs')

// function countFilesInDirectory(dirPath) {
//   try {
//     const files = readdirSync(dirPath);

//     console.log(files);

//     return files.length;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const pathToDirectory = './my-folder';

// const count = countFilesInDirectory(pathToDirectory);
// console.log(count);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Count the number of files in a directory Recursively in Node.js

// import {readdirSync, statSync} from 'fs';
// import path from 'path';

// // 👇️ if you use the CommonJS require() syntax
// // const {readdirSync, statSync} = require('fs')
// // const path = require('path')

// function recursivelyCountFiles(dirPath, files) {
//   const filesCurrentDir = readdirSync(dirPath);

//   let allFiles = files || [];

//   for (const fileName of filesCurrentDir) {
//     const filePath = path.join(dirPath, fileName);

//     if (statSync(filePath).isDirectory()) {
//       allFiles = recursivelyCountFiles(filePath, allFiles);
//     } else {
//       allFiles.push(fileName);
//     }
//   }

//   console.log(allFiles);

//   return allFiles.length;
// }

// const pathToDirectory = './my-folder';

// const count = recursivelyCountFiles(pathToDirectory);
// console.log(count);
