console.log("js started")

var temperature = 40

if (temperature <= 40) {
  console.log("It is cold")
} else {
  console.log("It is hot")
}


var grade = 60

if (grade >= 90) {
  console.log("Grade is A");
} else if (grade >= 80) {
  console.log("Grade is B");
} else if (grade >= 70) {
  console.log("Grade is C");
} else {
  console.log("Grade is D");
}


function multiplay10(t) {
  return t * 10
}
console.log(multiplay10(3));


var word = "Coding"

function whichworld(w) {
  return "I like " + w
}
console.log(whichworld(word));


for (var i = 5; i <= 11; i++) {
  console.log("Carlos");
}

var beers = ["Budlight", "Peak", "Coors"]
for (var i = 0; i < beers.length; i++) {
  console.log(beers[i])
}



var friends = ["Jake", "John", "Samantha", "Billy"]
for (var i = 0; i < friends.length; i++) {
  console.log(friends[i] + " is my friend")
}


var x = 6
while (x < 10) {
  console.log("On number " + x);
  x++
}



var x = 4
var y = 2
var a = "Jhane"
var b = "Smith"

function add2numbers(a, b) {
  console.log(a + b)
}
add2numbers(x, y)
add2numbers(a, b)


var drinks = [
  ["coke", "pepsi"],
  ["sprite", "polar"]
]
console.log(drinks[0][0]);
console.log(drinks[1][1]);



var numbers = 500;
if (numbers < 100) {
  console.log("that the number is less than 100")
} else {
  console.log("thet the number it was greater than 100.");
}


var name = "Krisztian"

function announce(k) {
  return "my name: " + k
}
console.log(announce(name));




// var name = prompt("Say your name");
// function announce(k) {
//   return "Your name: " + k
// }
// console.log(announce(name));


var door1 = "gold"
var door2 = "silver"
var door3 = "bronz"

function announce(q) {
  return "Your prize: " + q
}
alert(announce(door1))



// function winAprize(door) {
//   if (door == "door1") {
//     console.log("you have won gold")
//   } else if (door == "door2") {
//     console.log("you have won silver")
//   } else if (door == "door3") {
//     console.log("you have won bronze")
//   } else {
//     console.log("you've won NOTHING")
//   }
