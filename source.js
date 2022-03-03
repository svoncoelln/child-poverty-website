loadDoc();

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      read(this.responseText);
      console.log("loaddoc");
    }
  };
  xhttp.open("GET", "data.txt", true);
  xhttp.send();
}

function loadTableData(list) {
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	  
	for(let i = 0; i < list.length; i++){
		let x = row.insertCell(i);
		x.innerHTML = list[i];
    console.log(x);
	}
}

function reigonToArr(r) {
  let arr = [r.state, r.FIPS, r.id, r.name, r.population, r.children, r.current, r.percentage];
  return arr;
}

function read(text) {
  let linesArray = text.split("\n");
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
  for (let i = 1; i < objArray.length; i++) {
    loadTableData(reigonToArr(objArray[i]));
  }
}