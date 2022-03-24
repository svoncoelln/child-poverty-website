let table_size = 0;
let counter = 0;
let nn = 10;
loadDoc();

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      read(this.responseText);
    }
  };
  xhttp.open("GET", "list.txt", true);
  xhttp.send();
}


function loadTablelist(list) {
  let tableString = "";
  for(let i = 1; i < list.length; i++) {
    tableString += `<tr><td>${list[i].state}</td><td>${list[i].FIPS}</td><td>${list[i].id}</td><td>${list[i].name}</td><td>${list[i].population}</td><td>${list[i].children}</td><td>${list[i].impoverishedChildren}</td><td>${list[i].percentage}</td></tr>`;
  }

  document.getElementById("tableBody").innerHTML = tableString;
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
  loadTablelist(objArray);
}

function changenn(){
	var select = document.getElementById('next');
	nn = parseInt(select.options[select.selectedIndex].value);
}

function loadTablelist(region) {
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	
	let list = regionToArr(region);
	
	for(let i = 0; i < list.length; i++){
		table_size += 1;
		let x = row.insertCell(i);
		x.innerHTML = list[i];
	}
}

function del(){
	let table = document.getElementById("table-body");
	for (let i = 0; i < table_size; i++){
		table.deleteRow(-1);
	}
	table_size = 0;
}

function regionToArr(r){
	let arr = [r.state, r.FIPS, r.id, r.name, r.population, r.children, r.impoverishedchildren, r.percentage];
	return arr;
}

function arrToregion(list){
	let region = {
		state: list[0],
		FIPS: list[1],
		id: list[2],
		name: list[3],
		population: list[4],
		children: list[5],
		impoverishedchildren: list[6],
		percentage: Math.round(list[6] / list[5] * 10000)/100 + "%"
	};
	return region;
}

function search(){
	del();
	let selcolumn = document.getElementById('search-column');
	let column = selcolumn.options[selcolumn.selectedIndex].value;
	
	let selscope = document.getElementById('search-scope');
	let scope = selscope.options[selscope.selectedIndex].value;
	
	let target = (document.getElementById('searchfor').value).toString();
	
	for(let i = 0; i < list.length; i++) {
		let region = "";
		if(column == 'state'){
			region = list[i].state;
		}
		else if(column == 'FIPS'){
			region = list[i].FIPS;
		}
		else if(column == 'dist-id'){
			region = list[i].id;
		}
		else if(column == 'name'){
			region = list[i].name;
			console.log(region);
		}
		else if(column == 'population'){
			region = list[i].population;
		}
		else if(column == 'children'){
			region = list[i].children;
		}
		else if(column == 'impoverishedchildren'){
			region = list[i].impoverishedchildren;
		}
		else if(column == 'percentage'){
			region = list[i].percentage;
		}

		if(scope == 'exact'){
			if(region == target){
				loadTablelist(list[i]);
			}
		}
		else if(scope == 'contains'){
			if(region.includes(target)){
				loadTablelist(list[i]);
			}
		}
		else if(scope == 'not-contains'){
			if(!region.includes(target)){
				loadTablelist(list[i]);
			}
		}
	}
}
//to sort take first part of search as findcolumn then convert the column to an array?

for(let i = 0; i < list.length; i++){
	list[i] = arrToregion(list[i]);
}

loadNext();

function loadNext() {
	del();
	changenn();
	for(let i = counter; i < counter+nn; i++) {
		if(i < 0 || i > list.length) {
			i = 0;
			counter = 0;
		}
		loadTablelist(list[i]);
	}
	counter+=nn;
	if(counter < 0 || counter > list.length)
		counter = 0;
}

function loadPrevious() {
	del();
	changenn();
	if(counter-nn < 0 || counter-nn > list.length) {
		i = 0;
		counter = nn;
	}
	for(let i = counter-nn; i < counter; i++) {
		if(i < 0 || i > list.length) {
			i = 0;
			counter = nn;
		}
		loadTablelist(list[i]);
	}
	counter-=nn;
	if(counter < 0 || counter > list.length)
		counter = 0;
}