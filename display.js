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

function image() {
    var url = new URL(window.location.href);
    var img = url.searchParams.get("img");
    document.getElementById("view-image").src = "files/portfolio/IMG_" + img + ".png";
}

function nextImg() {
    var url = new URL(window.location.href);
    var img = url.searchParams.get("img");
    if(img+1 <= db[ranges][1]){
        window.history.pushState("","","/view.html?img=" + (img+1));
        image();
    }
}

function prevImg() {
    var url = new URL(window.location.href);
    var img = url.searchParams.get("img");
    if(img-1 >= db[ranges][0]){
        window.history.pushState("","","/view.html?img=" + (img-1));
        image();
    }
}

console.log("Type: " + type + ", category: " + current);
if (!window.location.pathname.includes("view.html")) {
    show(current);	
} else {
    image();
}