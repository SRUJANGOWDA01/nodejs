 let time = 10

if(time >= 12) {
    console.log("Good Morning")
 } else if(time > 12 && time < 18 ) {
   console.log("Good Afternoon")
 }
console.log(`time =`,time)
 

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(`cars =`,cars)