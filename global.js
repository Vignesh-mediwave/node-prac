//global objects
//console.log(global);

setTimeout(() => {
  console.log("during timeout");
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log("this is interal");
}, 1000);

console.log(__dirname);
console.log(__filename);
