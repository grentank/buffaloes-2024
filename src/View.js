class View {
  constructor() {
    this.type = 'terminal';
  }

  showPhones(phones) {
    console.table(phones);
  }

  showSuccess() {
    console.log('Operation completed successfully');
  }
}

module.exports = View;
