loadDoc();

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      read(this.responseText);
    }
  };
  xhttp.open("GET", "data.txt", true);
  xhttp.send();
}

function loadTableData(list) {
  let tableString = "";
  for(let i = 1; i < list.length; i++) {
    tableString += `<tr><td>${list[i].state}</td><td>${list[i].FIPS}</td><td>${list[i].id}</td><td>${list[i].name}</td><td>${list[i].population}</td><td>${list[i].children}</td><td>${list[i].impoverishedChildren}</td><td>${list[i].percentage}</td></tr>`;
  }

  document.getElementById("tableBody").innerHTML = tableString;
}

function reigonToArr(r) {
  let arr = [r.state, r.FIPS, r.id, r.name, r.population, r.children, r.impoverishedChildren, r.percentage];
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
  loadTableData(objArray);
}