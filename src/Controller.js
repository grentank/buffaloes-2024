class Controller {
  // Dependency Injection
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  run() {
    const arg = process.argv[2];
    switch (arg) {
      case 'show':
        this.view.showPhones(this.model.retreivePhoneBook());
        break;
      case 'add': {
        this.model.addPhoneNumber(process.argv[3]);
        this.view.showSuccess();
        break;
      }
      default:
        break;
    }
  }
}

module.exports = Controller;
