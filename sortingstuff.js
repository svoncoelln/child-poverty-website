function compareState(a, b){
	return(a.state.localeCompare(b.state));
}

function compareName(a, b){
	return(a.name.localeCompare(b.name));
}

function comparePopulation(a, b){
	if(a.population > b.population){
		return 1;
	}
	else if(a.population < b.population){
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

data.sort(compareState);
