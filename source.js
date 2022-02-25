
function loadTableData(list) {
	let table = document.getElementById("table-body");
	let row = table.insertRow();
	
	for(let i = 0; i < list.length; i++){
		let x = row.insertCell(i);
		x.innerHTML = list[i];
	}
}

let l = ["AL", "01", "00190", "Alabaster City School District", "35,268", "6,797", "669", "9.84%"];
let l2 = ["AL","1","5","Albertville City School District","22120","4163","918"];
let l3 = ["AL","1","30","Alexander City City School District","16819","2579","700"];
let l4 = ["AL","1","60","Andalusia City School District","8818","1471","346"];
let l5 = ["AL","1","90","Anniston City School District","22017","3053","735"];
let l6 = ["AL","1","100","Arab City School District","8442","1537","218"];
let l7 = ["AL","1","120","Athens City School District","27028","4124","585"];
let l8 = ["AL","1","180","Attalla City School District","6006","942","226"];
let l9 = ["AL","1","210","Auburn City School District","63511","7514","655"];
let l10 = ["AL","1","240","Autauga County School District","56145","9647","1378"];

let data = [l, l2, l3, l4, l5, l6, l7, l8, l9, l10];
for(let i = 0; i < data.length; i++){
	loadTableData(data[i]);
}

function search(){
	let input = document.getElementById('searchfor');
	input = input.toLowerCase();
	
	
	for(let i = 0; i < data.length; i++) {
		for(let j = 0; j < data[i].length; j++) {
			let target = data[i][j].innerText;
			target = target.toLowerCase();
			if(target = input)
				data[i][j].style.display = "";
			else
				data[i][j].style.display = "none";
		}
	}
}