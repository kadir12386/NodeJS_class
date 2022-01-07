const fs = require("fs");
//utf8 --> it will accpect all the character like emoji §,text ,chiniies,
// fs.readFile("./msg.txt", "utf8", (err, data) => {
//   console.log(data);
// });
// //======= writeFile =======
// const data = "Our happiness depends only on ourselves";
// fs.writeFile("./quotes.txt", data, (err) => {
//   console.log("Completed writing");
// });
// //===============appendFile =================================
// // const name = "Sangeetha";
// // fs.writeFile("./awesome.txt", name, (err) => {
// //   console.log("Completed writing");
// // });
// const name = "\n She is cute.";
// fs.appendFile("./awesome.txt", name, (err) => {
//   console.log("Completed writing");
// });
//================================================
// create samw quote with 10 files...
//backups/

// const [, , noOfFiles] = process.argv;
// const quote = "Sample text..";
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backups/test-${i}.txt`, quote, (err) => {
//     console.log("Completed writing", i);
//   });
// }

const [, , noOfFiles] = process.argv;
const quote = "Sample text..";
for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFile(`./backups/test-${i}.txt`, quote, (err) => {
    console.log("Completed writing", i);
  });
}
//CopyFile
// fs.readFile("./msg.txt", "utf8", (err, data) => {
//   console.log("readed");
//   fs.writeFile("./cool.txt", data, (err) => {
//     console.log("to cool writed");
//   });
// });
fs.copyFile("./msg.txt", "copy.txt", (err) => {
  console.log("copied");
});
