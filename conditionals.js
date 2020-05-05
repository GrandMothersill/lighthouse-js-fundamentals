
const temperature = -15;

if (temperature < -10) {
  console.log("Get the parka out!")
} else if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside! (Please maintain a minimum of 6 feet of distance between yourself and others.)");

const isCitizen = true;
const age =2;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote. (Please do not take a lollipop, they are only for the voters and we only have so many. Sorry. There is a Starbucks downstairs.)")
}

const haveEnergy = true;
const workTomorrow = false;
const inclementWeather = true;
if (!haveEnergy || workTomorrow || inclementWeather) {
  console.log("Maybe spending all night performing dark rituals in the woods is an irresponsible decision at this time. Stay in.");
} else {
  console.log("Getchur candles and sparrow skulls out!")
}