const fs = require("fs");

// synchronous code or blocking code
// fs.writeFileSync("./file-handling/todo.txt", "Hello there how are you!!");

// asynchronous code or non-blocking code
// fs.writeFile(
//   "./file-handling/todo.txt",
//   "Hello there how are you!! I ove",
//   (err) => {}
// );

// read file
// fs.readFile("./todo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//      console.log(data);
//   }
// });

// append file
// fs.appendFileSync("./todo.txt", "\n"+new Date().toLocaleString());

// copy file
// fs.copyFileSync("./todo.txt", "./test.txt");

// delete file
fs.unlinkSync("./test.txt");
