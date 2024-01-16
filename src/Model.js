const fs = require('fs');
const PhoneNumber = require('./PhoneNumber');

class Model {
  #filePath;

  constructor(filePath) {
    this.#filePath = filePath;
  }

  savePhoneBook(phoneBook) {
    fs.writeFileSync(this.#filePath, JSON.stringify(phoneBook), 'utf-8');
  }

  addPhoneNumber(value) {
    const newPhone = new PhoneNumber(value, 'домашний');
    const currentPhones = this.retreivePhoneBook();
    currentPhones.push(newPhone);
    this.savePhoneBook(currentPhones);
  }

  retreivePhoneBook() {
    const fileData = fs.readFileSync(this.#filePath, 'utf-8');
    return JSON.parse(fileData);
  }
}

module.exports = Model;
