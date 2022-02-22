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

function loadTableData(list) {

	//0: Date
	//1: Name
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	  
	for(let i = 0; i < list.length; i++){
		let x = row.insertCell(i);
		x.innerHTML = list[i];
	}
}
let l = ["AL", "01", "00190", "Alabaster City School District", "35,268", "6,797", "669", "9.84%"];
loadTableData(l);

function tableCreate() {
  const body = document.body,
        tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < 3; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 2; j++) {
      if (i === 2 && j === 1) {
        break;
      } else {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
        td.style.border = '1px solid black';
        if (i === 1 && j === 1) {
          td.setAttribute('rowSpan', '2');
        }
      }
    }
  }
  body.appendChild(tbl);
}

tableCreate();
=======
}
>>>>>>> 1bed61b58a4f0edb4fe989cb9662e952829f14f2
