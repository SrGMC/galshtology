function show(category) {
	var range = db[type][category];
	var content = "";
	if(range !== null){
		for (var i = range[0]; i <= range[1]; i++) {
			content += '<a href="view.html?img=' + i + '"><img class="lazyload" src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== data-src="files/portfolio/IMG_' + i + '.png"></a>'
		}
	}
	document.getElementById('image').innerHTML = content;
	document.getElementById(current).classList.remove('active');
	current = category;
	document.getElementById(current).classList.add('active');
	lazyload();
}

function image() {
    var url = new URL(window.location.href);
    var img = parseInt(url.searchParams.get("img"));
    document.getElementById("view-image").src = "files/portfolio/IMG_" + img + ".png";
}

function nextImg() {
    var url = new URL(window.location.href);
    var img = parseInt(url.searchParams.get("img"));
    if(img+1 <= db.ranges[1]){
        window.history.replaceState("","Galshtology","view.html?img=" + (img+1));
        image();
    }
}

function prevImg() {
    var url = new URL(window.location.href);
    var img = parseInt(url.searchParams.get("img"));
    if(img-1 >= db.ranges[0]){
        window.history.replaceState("","Galshtology","view.html?img=" + (img-1));
        image();
    }
}

if (!window.location.pathname.includes("view.html")) {
	console.log("Type: " + type + ", category: " + current);
    show(current);	
} else {
    image();
}
