var students = ["Jhon", "Jane", "Mery", "Mike"];
//Jane is index 1
console.log(students[1]);
//Mike is index 3
console.log(students[3]);


var cars = [
  ["Porsche", "Camero"],
  ["Camry", "Prius"]
];

console.log(cars[1][0]);

console.log(cars[0][1]);


var car = {
  make: 'Toyota',
  model: 'Prius',
  doors: 4
};

console.log(car['make']);

console.log(car['doors']);


var j = {
  name: 'Jane',
  job: 'developer',
  age: 34
};

console.log(j['age']);

console.log(j['job']);
console.log(j.age);
console.log(j.job);


var user = {
  firstName: 'Lucille',
  lastName: 'Bluth'
};

console.log(user.firstName);
console.log(user.lastName);

console.log(user.firstName + ' ' + user.lastName);
console.log(user.firstName + ', ' + user.lastName);




var me = {
  firstName: 'Krisztian',
  lastName: 'Holub',
  brithday: 1989,
  interest: ['runing', 'cycling', 'swiming']
};

console.log(me.firstName);
console.log(me.lastName);
console.log(me.brithday);
console.log(me.interest[0]);
console.log(me.interest[1]);
console.log(me.interest[2]);

console.log(me.firstName + ' ' + me.lastName + ' ' + me.brithday + ' ' + (me.interest[0]) + ' ' + (me.interest[1]) + ' ' + (me.interest[2]));



var mery = {
  firstName: 'Mery',
  brithday: 'Oct 4'
};

console.log(mery.brithday + ' is the brithday of ' + mery.firstName);
