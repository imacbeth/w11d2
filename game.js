const Game = function () {
  this.players = [];
  this.deck = [];
}

Game.prototype.addPlayer = function (player) {
  this.players.push(player);
};

Game.prototype.addCard = function (card) {
  this.deck.push(card);
};

Game.prototype.dealCard = function (player) {
  card = this.deck.pop();
  player.addCard(card);
};

Game.prototype.compareHands = function (player1, player2) {
  let category = "Strength"
  if (player1.playCard() > player2.playCard()) {
    return "Player 1 wins!";
  }
  else if (player1.playCard() < player2.playCard()) {
    return "Player 2 wins!";
  }
};



module.exports = Game;
