let table_size = 0;
let counter = 0;
let nn = 10;

function changenn(){
	var select = document.getElementById('next');
	nn = select.options[select.selectedIndex].value;
}

function loadTableData(reigon) {
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	
	let list = reigonToArr(reigon);
	
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

function reigonToArr(r){
	let arr = [r.state, r.fips, r.id, r.name, r.total, r.school, r.poverty, r.percent];
	return arr;
}

function arrToReigon(data){
	let reigon = {
		state: data[0],
		fips: data[1],
		id: data[2],
		name: data[3],
		total: data[4],
		school: data[5],
		poverty: data[6],
		percent: Math.round(data[6] / data[5] * 10000)/100 + "%"
	};
	return reigon;
}

function search(){
	del();
	let input = document.getElementById('searchfor');
	input = input.toLowerCase();
	
	for(let i = 0; i < data.length; i++) {
		let target = data[i].name;
		target = target.toLowerCase();
		if(target == input){
			loadTableData(data[i]);
		}
	}
}

var data = [
	["AL", "01", "00190", "Alabaster City School District", "35268", "6797", "669"],
	["AL","1","5","Albertville City School District","22120","4163","918"],
	["AL","1","30","Alexander City City School District","16819","2579","700"],
	["AL","1","60","Andalusia City School District","8818","1471","346"],
	["AL","1","90","Anniston City School District","22017","3053","735"],
	["AL","1","100","Arab City School District","8442","1537","218"],
	["AL","1","120","Athens City School District","27028","4124","585"],
	["AL","1","180","Attalla City School District","6006","942","226"],
	["AL","1","210","Auburn City School District","63511","7514","655"],
	["AL","1","240","Autauga County School District","56145","9647","1378"],
	["AL","1","270","Baldwin County School District","215609","34620","4002"]
];

for(let i = 0; i < data.length; i++){
	data[i] = arrToReigon(data[i]);
}

loadNext();

function loadNext() {
	del();
	changenn();
	for(let i = counter; i < counter+nn; i++) {
		if(i < 0 || i > data.length) {
			i = 0;
			counter = 0;
		}
		loadTableData(data[i]);
	}
	counter+=nn;
	if(counter < 0 || counter > data.length)
		counter = 0;
}

function loadPrevious() {
	del();
	changenn();
	if(counter-nn < 0 || counter-nn > data.length) {
		i = 0;
		counter = nn;
	}
	for(let i = counter-nn; i < counter; i++) {
		if(i < 0 || i > data.length) {
			i = 0;
			counter = nn;
		}
		loadTableData(data[i]);
	}
	counter-=nn;
	if(counter < 0 || counter > data.length)
		counter = 0;
}