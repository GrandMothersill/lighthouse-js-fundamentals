const chorus = "Into the woods and out of the woods and";
let repeat = 0;
while (repeat < 10) {
  if (repeat % 3 === 0 && repeat !== 0) {
    console.log("*keychange up, think Love on Top*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Home before dark!");


