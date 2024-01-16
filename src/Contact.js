const PhoneNumber = require('./PhoneNumber');

class Contact {
  #phoneNumbers;

  constructor(name) {
    this.name = name;
    this.#phoneNumbers = [];
  }

  addPhoneNumber(value, type = 'uknown') {
    const newNumber = new PhoneNumber(value, type);
    this.#phoneNumbers.push(newNumber);
  }

  get phones() {
    return structuredClone(this.#phoneNumbers);
  }

  set phones(newPhonesArray) {
    console.log('FROM SETTER:', newPhonesArray);
    if (!Array.isArray(newPhonesArray)) {
      throw new Error('Нужно указать массив номеров');
    }
    newPhonesArray.forEach((phone) => this.addPhoneNumber(phone));
  }

  get phoneValues() {
    return this.#phoneNumbers.map((phone) => phone.value);
  }

  set firstName(newFirstName) {
    this.name = `${newFirstName} ${this.name}`;
  }
}

module.exports = Contact;
