const assert = require("assert");
const Card = require("../card.js");
const Player = require("../player.js");
const Game = require("../game.js");

describe("Game", function () {

  let card1;
  let card2;
  let player1;
  let player2;
  let game;

  beforeEach(function(){
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Batman", 10, 5, 6);
    player1 = new Player("Jesus");
    player2 = new Player("Iona");
  });

  it("should start with no players", function(){
    const result = game.players.length;
    assert.strictEqual(result, 0);
  });

  it("should add players", function(){
    game.addPlayer(player1);
    game.addPlayer(player2);
    const result = game.players.length;
    assert.strictEqual(result, 2);
  });

  it("should have a deck that starts empty", function () {
    const result = game.deck.length;
    assert.deepStrictEqual(result, 0);
  });

  it("should be able to add cards to deck",function () {
    game.addCard(card1);
    game.addCard(card2);
    const result = game.deck.length;
    assert.strictEqual(result, 2);
  });

  it("should be able to deal", function(){
    game.addCard(card1);
    game.addCard(card2);
    game.dealCard(player1);
    game.dealCard(player2);
    const result = game.deck.length;
    assert.strictEqual(result, 0);
    const result2 = player1.cards.length;
    assert.strictEqual(result2, 1);
  });
});
