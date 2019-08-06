function show(category) {
	var range = db[type][category];
	var content = "";
	if(range !== null){
		for (var i = range[0]; i <= range[1]; i++) {
			content += '<img src="files/portfolio/IMG_' + i + '.png">'
		}
	}
	document.getElementById('image').innerHTML = content;
	document.getElementById(current).classList.remove('active');
	current = category;
	document.getElementById(current).classList.add('active');
}

console.log("Type: " + type + ", category: " + current);
show(current);
