// Villain constructor
function Villain(name, img, strength, speed, wits, motive, victory, costume, powers, iceCream) {
  this.villainName = name;
  this.img = img;
  this.strength = strength;
  this.speed = speed;
  this.wits = wits;
  this.motive = motive;
  this.victory = victory;
  this.costume = costume;
  this.powers = powers;
  this.iceCream = iceCream;
}

// Hero constructor
function Hero(name, img, strength, speed, wits) {
  this.heroName = name;
  this.img = img;
  this.strength = strength;
  this.speed = speed;
  this.wits = wits;
}

var darthVader = new Villain('Darth Vader', '../img/darth-vader.jpg', 4, 2, 3, 'dominate', 'convert', 'helmet', 'supernatural', 'lactose-intolerance');
var alienQueen = new Villain('Alien Queen', '../img/alien.jpg', 5, 4, 1, 'dominate', 'kill', 'body', 'physical', 'strawberry');
var bellatrix = new Villain('Bellatrix LeStrange', '../img/bellatrix-the-strange.jpg', 3, 4, 3, 'chaos', 'torture', 'cape', 'supernatural', 'mint-chip');
var whiteWitch = new Villain('White Witch', '../img/bellatrix-the-strange.jpg', 4, 2, 4, 'dominate', 'kill', 'cape', 'supernatural', 'vanilla');
var skeletor = new Villain('Skeletor', '../img/skelator.jpg' 4, 2, 1, 'dominate', 'torture', 'underwear', 'supernatural', 'bubble-gum');
var sauron = new Villain('Sauron', '../img/the-eye-of-sauron.jpg' 5, 1, 5, 'dominate', 'convert', 'body', 'supernatural', 'chunky-monkey');
var terminator = new Villain('Terminator', '../img/terminator.jpg', 5, 4, 1, 'dominate', 'kill', 'body', 'mechanical', 'rocky-road');
var gru = new Villain('Gru', '../img/Gru.jpg', 2, 2, 5, 'dominate', 'convert', 'black', 'mechanical', 'chocolate');
var goblinKing = new Villain('Goblin King', '../img/goblin king.jpg', 'dominate', 'convert', 'cape', 'suernatural', 'pistachio');
var khan = new Villain('Khan', '../img/khan.jpeg', 'dominate', 'convert', 'body', 'physical', 'strawberry-sorbet');
var loki = new Villain('Loki', '../img/loki.png', 2, 3, 5, 'chaos', 'kill', 'helmet', 'supernatural', 'cherry-garcia');
