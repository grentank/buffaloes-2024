const TeamPlayer = require('./TeamPlayer');

class HockeyPlayer extends TeamPlayer {
  static totalScore = 0;

  constructor({
    teamName, name, jerseyNumber, age,
  }) {
    super(name, age, teamName);
    this.jerseyNumber = jerseyNumber;
    this.type = 'Hockey';
  }

  score() {
    // HockeyPlayer.totalScore += 1;
    Object.getPrototypeOf(this).constructor.totalScore += 1;
    return `${this.name} has scored!`;
  }
}

module.exports = HockeyPlayer;
