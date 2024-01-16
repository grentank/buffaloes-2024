class PhoneNumber {
  constructor(value, type) {
    if (!value) throw new Error('Value is required');
    this.value = value;
    this.type = type;
  }
}

module.exports = PhoneNumber;
