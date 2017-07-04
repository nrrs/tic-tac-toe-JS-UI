const View = require('./ttt-view.js');
const Game = require('./game.js');

$( () => {
  let game = new Game();
  let root = $("figure.ttt");
  new View(game, root);

});
