const Player = function (name) {
  this.name = name;
  this.hand = [];
}

Player.prototype.addCard = function(card){
  this.hand.push(card);
}

Player.prototype.selectCategory = function (category) {
  if(category === "Intelligence"){
    return this.hand[0].intelligence
  }
  else if (category === "Strength") {
    return this.hand[0].strength
  }
  else if (category === "Agility"){
    return this.hand[0].agility
  }
};

Player.prototype.playCard = function (category) {
  const topCard = this.cards.pop();
  return topCard[category];
};

module.exports = Player;
