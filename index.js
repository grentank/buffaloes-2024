const fs = require('fs').promises;

async function processFiles() {
  return fs.readFile('./package.json', 'utf8');
}

// console.log(processFiles());

// console.log(1);
// fs.readFile('./package.json', 'utf8').then(() => console.log(2));
// console.log(3);

async function logNumber() {
  await 1;
  console.log(2);
}

async function logDelayed() {
  await setTimeout(() => console.log(4), 1000);
  console.log(5);
}

// console.log(1);
// logNumber();
// logDelayed();
// console.log(3);

console.log(new Promise((res) => res(45)));

function log1() { console.log(1); }
function log2() { console.log(2); }
function log3() { console.log(3); }
function log4() { console.log(4); }
function log5() { console.log(5); }

// 123546, 124536, 235146, 235461, 235641, 354621
// 153264
// async function start() {
//   await console.log(1);
//   console.log(2);
// }

// async function finish() {
//   console.log(3); // MICRO 6
// }

// start().then(() => console.log(4)); // MICRO 4
// console.log(5);
// finish().then(() => console.log(6));

// const bcrypt = require('bcrypt');

// async function hashPass() {
//   console.time('hash');
//   const promises = new Array(5).fill(null).map(() => bcrypt.hash(Math.random().toString(), 13));
//   const hashes = await Promise.all(promises);
//   console.log(hashes);
//   //   for (let index = 0; index < 5; index++) {
//   //     const hash = await bcrypt.hash(Math.random().toString(), 13);
//   //     console.log(hash);
//   //   }
//   console.timeEnd('hash');
// }

// hashPass();

const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     { type: 'input', name: 'username', message: 'Введи имя:' },
//     {
//       type: 'list',
//       name: 'bonuses',
//       message: 'На сколько ты опоздал?',
//       choices: [
//         { name: 'Не опаздывал', value: 0 },
//         { name: 'На 2-3 минутки', value: 1 },
//         { name: 'Опоздал больше, чем на 5 минут', value: 2 },
//       ],
//     },
//   ])
//   .then((answers) => console.log(answers));

/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */


console.log('Hi, welcome to Node Pizza');

const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
    transformer: (answer) => (answer ? '👍' : '👎'),
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i,
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});