const fs = require("fs");
//reading file
//fs.readFile("./docs/blog1.txt", (err, data) => {
//if (err) {
//console.log(err);
//}
//console.log(data.toString());
//});

//writing file

// fs.writeFile("./docs/blog1.txt", "hello,world", () => {
//   console.log("content is written inside file");
// });
// fs.writeFile("./docs/blog2.txt", "hello,again", () => {
//   console.log("msg was written in second blog");
// });

//directories

//if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//delete file

// if (fs.existsSync("./docs/delfile.txt")) {
//   fs.unlink("./docs/delfile.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
