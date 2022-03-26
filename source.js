let table_size = 0;
let counter = 0;
let nn = 10;
loadDoc();

const objArray = [];

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

function read(text) {
  let linesArray = text.split("\n");
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

function sortTable(col) {
  sortedArr = []
  switch(col) {
    case 'state':
      sortedArr = objArray.sort((a, b) => (a.state > b.state) ? 1 : -1);
      break;
    case 'FIPS':
      sortedArr = objArray.sort((a, b) => (a.FIPS > b.FIPS) ? 1 : -1);
      break;
    case 'id':
      sortedArr = objArray.sort((a, b) => (a.id > b.id) ? 1 : -1);
      break;
    case 'name':
      sortedArr = objArray.sort((a, b) => (a.name > b.name) ? 1 : -1);
      break;
    case 'population':
      sortedArr = objArray.sort((a, b) => (a.population > b.population) ? 1 : -1);
      break;
    case 'children':
      sortedArr = objArray.sort((a, b) => (a.children > b.children) ? 1 : -1);
      break;
    case 'impoverishedChildren':
      sortedArr = objArray.sort((a, b) => (a.impoverishedChildren > b.impoverishedChildren) ? 1 : -1);
      break;
    case 'percentage':
      sortedArr = objArray.sort((a, b) => (a.percentage > b.percentage) ? 1 : -1);
      break;
  }
  loadTableData(sortedArr);
}