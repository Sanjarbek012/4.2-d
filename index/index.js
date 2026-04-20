// uyga vazifa
// 4-masala

//  const fs = require("fs")
// fs.mkdir("html", { recursive: true }, (err) => {
//   if (err) throw err

//   fs.writeFile("html/index.html", "<h1>Hello World</h1>", (err) => {
//     if (err) throw err
//     console.log("html papka va index.html yaratildi!")
//    })
//  })

//   const fs = require("fs")
// fs.mkdir("static", { recursive: true }, (err) => {
//   if (err) throw err

//  fs.writeFileSync("static/script.js", "console.log('Hello World')")
//   fs.writeFileSync("static/script.ts", "let msg: string = 'Hello TypeScript';")

//   fs.writeFileSync("static/script.js", "console.log('Hello World')")
//   fs.writeFileSync("static/script.ts", "let msg: string = 'Hello TypeScript';")
//   fs.writeFileSync("static/style.css", "body { font-family: Arial; }")

//   fs.writeFileSync("static/go.mod", "module golang-todo-app\n\ngo 1.20")
//   fs.writeFileSync("static/go.sum", "")
//   fs.writeFileSync("static/main.go", "package main\n\nfunc main() {\n\tprintln(\"Hello Go\")\n}")

//   fs.writeFileSync("static/README.md", "# Golang Todo App")

//   fs.writeFileSync(
//     "static/tsconfig.json",
//     JSON.stringify(
//       {
//         compilerOptions: {
//           target: "ES6",
//           module: "commonjs",
//           strict: true,
//           esModuleInterop: true
//         }
//       },
//       null,
//       2
//     )
//   )

//   console.log("Barcha fayllar yaratildi!")
// }) 


// 1-masala 

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function printResult(result) {
//   console.log("Natija:", result);
// }

// module.exports = {
//   add,
//   subtract,
//   printResult 
// };
 
// app.js

// const math = require("./mathModule");

// const sum = math.add(5, 3);
// math.printResult(sum);

// const minus = math.subtract(10, 4);
// math.printResult(minus); 

// 2-masala  

// const fs = require("fs");

// fs.writeFileSync("test.txt", "Salom, dunyo!");

// const data = fs.readFileSync("test.txt", "utf-8");

// console.log("Fayldan o'qildi:", data); 

// 3-masala  

// const fs = require("fs");

// let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// console.log("Array:", arr);

// const buffer = Buffer.from(arr.join(" "), "utf-8");

// fs.writeFileSync("buffer.txt", buffer);

// const readBuffer = fs.readFileSync("buffer.txt");

// console.log("Bufferdan o'qildi:", readBuffer.toString());