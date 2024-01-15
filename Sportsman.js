class Sportsman {
  constructor(name, age, initialExp = 0) {
    this.name = name;
    this.age = age ?? 18;
    this.exp = initialExp;
  }

  static generateSportsmen() {
    return [new Sportsman('Ivan', 20), new Sportsman('Petr', 25),
      new Sportsman('Masha', 30), new Sportsman('Sasha', 35),
    ];
  }

  train() {
    console.log(`${this.name} is training`);
    this.exp += Math.floor(Math.random() * 5) + 1;
  }
}

module.exports = Sportsman;
