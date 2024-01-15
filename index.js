// const person = {
//   name: 'Alex',
//   age: 35,
// };

const HockeyPlayer = require('./HockeyPlayer');
const Sportsman = require('./Sportsman');
const TeamPlayer = require('./TeamPlayer');

// const myTrickyObj = { city: 'Moscow' };
// // const myTrickyObj2 = { a: 'a' };

// person.isAlive = true;
// person[myTrickyObj] = '1';
// // person[new Promise((res) => res())] = '2';

// // console.log(person);

// // let myKey = 'age';
// // console.log(person[myKey]);
// // myKey = 'name';
// // console.log(person[myKey]);

// // console.log(Object.keys(person));

// // console.log('toString' in person);

// // console.log(person.hasOwnProperty('toString'))
// // console.log(Object.hasOwn(person, 'toString'));

// // person.__proto__.falseKey = 'ololo';

// // for (const key in person) {
// //   if (Object.hasOwnProperty.call(person, key)) {
// //   const element = person[key];
// //   console.log('key: ', key, 'value: ', element);
// //   }
// // }
// person.age = 19;

// const bob = {
//   name: 'Bob',
//   newSayHi() {
//     console.log(`${this.name} is invoking a function`);
//   },
// };

// const alex = {
//   name: 'Alex',
//   newSayHi() {
//     console.log(`${this.name} is invoking a function`);
//   },
// };

// function sayHi(targetName) {
//   console.log(`Hi, ${targetName}! My name is ${this.name}`);
// }

// bob.sayHi = sayHi;
// person.sayHi = sayHi;

// // bob.sayHi('Alex');

// // person.name = 'Elon';

// // person.sayHi('Bob');

// // console.log(alex.newSayHi === bob.newSayHi);
// // console.log(person.sayHi === bob.sayHi);
// // console.log(this);
// // (function () {console.log(this);})();
// // notAnonymousF();

const charlie = new Sportsman('Charlie', 30);
const dimon = new TeamPlayer('Dimon', 42, 'Lakers');

console.log(Sportsman.generateSportsmen());

charlie.train();
// dimon.train();
dimon.teamTrain();
// console.log(charlie);
// console.log(dimon);

const frank = new HockeyPlayer({
  age: 50,
  jerseyNumber: 33,
  name: 'Frank',
  teamName: 'IntCanada',
});

const john = new HockeyPlayer({
  name: 'John',
});

console.log(frank.score());
console.log(HockeyPlayer.totalScore);
console.log(john.score());
console.log(HockeyPlayer.totalScore);
console.log(frank.score());
console.log(HockeyPlayer.totalScore);
// charlie.train();
// console.log(charlie);

// console.log(Sportsman.title);

// console.log([].isArray());

// console.log(frank.keys());
