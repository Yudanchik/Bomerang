// Наш герой.

class Hero {
  constructor({ position = 0 }) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    // умереть
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
