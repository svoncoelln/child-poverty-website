function populateTable() {
var playerList = [
  {name: "player1", highScore: 1, ability: 8},
  {name: "player2", highScore: 1, ability: 7},
  {name: "player3", highScore: 1, ability: 6},
  {name: "player4", highScore: 1, ability: 5},
  {name: "player5", highScore: 1, ability: 4},
  {name: "player6", highScore: 1, ability: 3},
  {name: "player7", highScore: 1, ability: 2},
  {name: "player8", highScore: 1, ability: 1}
];

for (var i = 0; i < playerList.length; i++) {
  console.log(i);
  var player = document.getElementById("player" + i + 1);
  var playerscore = document.getElementById('player' + i + 1 + "score")
  var progress=Math.random();
  progress=11*progress;
  progress=Math.floor(progress);
  playerList[i].ability=playerList[i].ability+progress;
  console.log(playerList[i])

  //add players score to the table//

  playerscore.innerText = playerList[i].ability;

}
}