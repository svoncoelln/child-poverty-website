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
  loadNext();
}

function changenn(){
	var select = document.getElementById('next');
	nn = parseInt(select.options[select.selectedIndex].value);
}

function del(){
	let table = document.getElementById("table-body");
	for (let i = 0; i < table_size; i++){
		table.deleteRow(-1);
	}
	table_size = 0;
}
 
function loadTablelist(list) {
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	
	for(let i = 0; i < list.length; i++){
		table_size += 1;
		let x = row.insertCell(i);
		x.innerHTML = list[i];
	}
}

function search(){
  filteredArr = [];
	del();
	let selcolumn = document.getElementById('search-column');
	let column = selcolumn.options[selcolumn.selectedIndex].value;
	
	let selscope = document.getElementById('search-scope');
	let scope = selscope.options[selscope.selectedIndex].value;
	
	let target = (document.getElementById('searchfor').value).toString();
	
	for(let i = 0; i < objArray.length; i++) {
		let region = "";
		if(column == 'state'){
			region = objArray[i].state;
		}
		else if(column == 'FIPS'){
			region = objArray[i].FIPS;
		}
		else if(column == 'dist-id'){
			region = objArray[i].id;
		}
		else if(column == 'name'){
			region = objArray[i].name;
		}
		else if(column == 'population'){
			region = objArray[i].population;
		}
		else if(column == 'children'){
			region = objArray[i].children;
		}
		else if(column == 'impoverishedchildren'){
			region = objArray[i].impoverishedchildren;
		}
		else if(column == 'percentage'){
			region = objArray[i].percentage;
		}

		if(scope == 'exact'){
			if(region == target){
				loadTablelist(objArray[i]);
			}
		}
		else if(scope == 'contains'){
			if(region.includes(target)){
				loadTablelist(objArray[i]);
			}
		}
		else if(scope == 'not-contains'){
			if(!region.includes(target)){
				loadTablelist(objArray[i]);
			}
		}
	}
}

loadNext();

function loadNext() {
	del();
	changenn();
	let data = [];
	let index = 0;
	for(let i = counter; i < counter+nn; i++) {
		if(i < 0 || i > objArray.length) {
			i = 0;
			counter = 0;
		}
		data[index] = objArray[i];
		index += 1;
	}
	loadTablelist(data);
	counter+=nn;
	if(counter < 0 || counter > objArray.length)
		counter = 0;
}

function loadPrevious() {
	del();
	changenn();
	if(counter-nn < 0 || counter-nn > objArray.length) {
		i = 0;
		counter = nn;
	}
	for(let i = counter-nn; i < counter; i++) {
		if(i < 0 || i > objArray.length) {
			i = 0;
			counter = nn;
		}
		loadTablelist(objArray[i]);
	}
	counter-=nn;
	if(counter < 0 || counter > objArray.length)
		counter = 0;
}

function compareState(a, b) {
	return(a.state.localeCompare(b.state));
}

function compareName(a, b) {
	return(a.name.localeCompare(b.name));
}

function comparePopulation(a, b) {
	if(a.population > b.population){
		return 1;
	}
	else if(a.population < b.population) {
		return -1;
	}
	return 0;
}

function compareChildren(a, b){
	if(a.children > b.children){
		return 1;
	}
	else if(a.children < b.children){
		return -1;
	}
	return 0;
}

function compareImpoverishedChildren(a, b){
	if(a.impoverishedchildren > b.impoverishedchildren){
		return 1;
	}
	else if(a.impoverishedchildren < b.impoverishedchildren){
		return -1;
	}
	return 0;
}

function comparePercentage(a, b){
	if(a.percentage > b.percentage){
		return 1;
	}
	else if(a.percentage < b.percentage){
		return -1;
	}
	return 0;
}