function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("test").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "data.txt", true);
  xhttp.send();
}

const linesArray = loadDoc().split("\n");
const objArray = [];
for (let i = 0; i < linesArray.length; i++) {
  const current = linesArray[i].split(",");
  const myObj = {
    state: current[0],
    FIPS: current[1],
    id: current[2],
    name: current[3],
    population: current[4],
    children: current[5],
    impoverishedChildren: current[6],
    percentage: (current[6]/current[5])*100+"%"
  }
  objArray.push(myObj);
}

function loadTableData(list) {
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	  
	for(let i = 0; i < list.length; i++){
		let x = row.insertCell(i);
		x.innerHTML = list[i];
	}
}

for (let i = 0; i < objArray.length; i++) {
  function reigonToArr(r) {
	let arr = [r.state, r.fips, r.id, r.name, r.total, r.school, r.poverty, r.percent];
  loadTableData(arr);
  }
}

// let l = ["AL", "01", "00190", "Alabaster City School District", "35,268", "6,797", "669", "9.84%"];
// let l2 = ["AL","1","5","Albertville City School District","22120","4163","918"];
// let l3 = ["AL","1","30","Alexander City City School District","16819","2579","700"];
// let l4 = ["AL","1","60","Andalusia City School District","8818","1471","346"];
// let l5 = ["AL","1","90","Anniston City School District","22017","3053","735"];
// let l6 = ["AL","1","100","Arab City School District","8442","1537","218"];
// let l7 = ["AL","1","120","Athens City School District","27028","4124","585"];
// let l8 = ["AL","1","180","Attalla City School District","6006","942","226"];
// let l9 = ["AL","1","210","Auburn City School District","63511","7514","655"];
// let l10 = ["AL","1","240","Autauga County School District","56145","9647","1378"];
// loadTableData(l);
// loadTableData(l2);
// loadTableData(l3);
// loadTableData(l4);
// loadTableData(l5);
// loadTableData(l6);
// loadTableData(l7);
// loadTableData(l8);
// loadTableData(l9);
// loadTableData(l10);

// let myArray = [l, l2, l3, l4, l5, l6, l7, l8, l9, l10];

// function sortData(arr) {
//   arr.sort();
// } 

/*
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
}
*/
