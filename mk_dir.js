// const fs = require("fs");

// const dirnames = {
//   sync: "createdDir",
//   async: "asycCreatedDir",
// };
// function printBoom() {
//   console.log("Boom");
// }

// fs.mkdir(dirnames.async, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     fs.writeFileSync(
//       `${dirnames.async}/file.js`,
//       `(${printBoom.toString()}())`
//     );
//   }
// });
//======================================
//fs.mkdir(path[,mode],callback)
//fs.mkdirSync(path[,mode])

const fs = require("fs");
const [, , dir] = process.argv;
function printBoom() {
  console.log("Boom");
}

fs.mkdir(dir, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFileSync(`${dir}/file.js`, `(${printBoom.toString()}())`);
  }
});
