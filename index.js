// const Contact = require('./src/Contact');

const Controller = require('./src/Controller');
const Model = require('./src/Model');
const View = require('./src/View');

// const alex = new Contact('Alex');

// alex.addPhoneNumber('123-45-67', 'Домашний');
// alex.addPhoneNumber('000-00-00');

// console.log(alex.phones);

// alex.phones = ['99999999', '32323233232'];
// alex.phones = '77777777777777';

// alex.firstName = 'Bob';

// console.log(alex.firstName);
const model = new Model('./data/phonebooks.txt');
const view = new View();
const controller = new Controller(model, view);
controller.run();
