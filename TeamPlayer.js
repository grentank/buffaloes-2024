const Sportsman = require('./Sportsman');

class TeamPlayer extends Sportsman {
  constructor(name, age, teamName) {
    super(name, age, 3);
    this.teamName = teamName;
    this.communication = 0;
  }

  teamTrain() {
    this.communication += 1;
    super.train();
  }
}

module.exports = TeamPlayer;
