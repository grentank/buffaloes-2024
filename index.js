// console.log('1 start');
// const res = fetch('https://jsonp.ro')
//   .then((data) => data.json())
//   .then((data) => {
//     console.log('DATA', data);
//     return 5;
//   })
//   .then((value) => console.log('VALUE:', value))
//   .catch((err) => {
//     console.log('ERROR OCCURED', err);
//   });
// console.log('3 end');
// console.log('4', res);
// const arr = [];
// for (let index = 0; index < 1e5; index++) {
//   arr.unshift(index);
// }

// console.log('5 after cycle', res);

// let intervalId;
// let counter = 0;

// const myPr = new Promise((resolve, reject) => {
//   intervalId = setInterval(() => {
//     counter++;
//     console.log('Counter:', counter);
//     if (counter === 4) {
//       resolve('RESOLVE DATA');
//     }
//   }, 1000);
// });

// console.log(myPr);
// myPr.then((data) => {
//   console.log('DATA:', data);
//   clearInterval(intervalId);
// });

const fs = require('fs').promises;

function readAndWritePersonConsecutive() {
  const person = {};
  fs.readFile('./name.txt', 'utf-8').then((name) => {
    person.name = name;
    return fs.readFile('./age.txt', 'utf-8');
  }).then((age) => {
    person.age = age;
    return fs.readFile('./nickname.txt', 'utf-8');
  }).then((nickname) => {
    person.nickname = nickname;
    return fs.writeFile('./person.txt', JSON.stringify(person), 'utf8');
  })
    .then((data) => {
      console.log('Done!', data);
    })
    .catch(console.log); // (err) => console.log(err)
}

function readAndWritePersonParallel() {
  const person = {};
  const files = ['name', 'age', 'nickname'];
  const promises = files.map((file) => fs.readFile(`./${file}.txt`, 'utf-8'));
  //   const namePromise = fs.readFile('./name.txt', 'utf-8');
  //   const agePromise = fs.readFile('./age.txt', 'utf-8');
  //   const nicknamePromise = fs.readFile('./nickname.txt', 'utf-8');
  //   Promise.all([namePromise, agePromise, nicknamePromise])
  Promise.all(promises)
    .then(([name, age, nickname]) => {
      person.name = name;
      person.age = age;
      person.nickname = nickname;
      return person;
    })
    .then((fullPerson) => fs.writeFile('./person.txt', JSON.stringify(fullPerson), 'utf8'));
}
// readAndWritePersonParallel();

const bcrypt = require('bcrypt');

function syncHashes(n) { // синхронно шифрует n паролей алгоритмом bcrypt
  return new Array(n).fill(null).map(() => bcrypt.hashSync('password', 11));
}

function asyncHashes(n) { // асинхронно шифрует n паролей алгоритмом bcrypt
  const promises = new Array(n).fill(null).map(() => bcrypt.hash('password', 11));
  return Promise.all(promises);
}

console.time('sync');
syncHashes(10);
console.timeEnd('sync'); // выведет время шифрования 10 синхронных паролей
console.time('async');
asyncHashes(10).then(() => console.timeEnd('async')); // сравните время
