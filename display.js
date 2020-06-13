function show(category) {
	var range = db[type][category].count;
	document.querySelector('#subtitle').innerHTML = db[type][category].subtitle;
	var content = "";
	if(range !== null){
		for (var i = 1; i <= range; i++) {
			content += '<a href="view.html?img=' + i + '&type=' + type + '&cat=' + category + '"><img class="lazyload" src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== data-src="files/portfolio/' + category + '/' + category + '_' + i + '.png"></a>'
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
    var cat = url.searchParams.get("cat");
    var type = url.searchParams.get("type");
    document.getElementById("view-image").src = "files/portfolio/" + cat + "/" + cat + "_" + img + ".png";

    if(img+1 <= db[type][cat]){
    	document.getElementById("nav_next").classList.remove('hidden');
    } else {
    	document.getElementById("nav_next").classList.add('hidden');
    }

    if(img-1 >= 1){
    	document.getElementById("nav_prev").classList.remove('hidden');
    } else {
    	document.getElementById("nav_prev").classList.add('hidden');
    }
}

function nextImg() {
    var url = new URL(window.location.href);
    var img = parseInt(url.searchParams.get("img"));
    var cat = url.searchParams.get("cat");
    var type = url.searchParams.get("type");
    if(img+1 <= db[type][cat]){
        window.history.replaceState("","Galshtology","view.html?img=" + (img+1) + '&type=' + type + '&cat=' + cat);
        image();
    }
}

function prevImg() {
    var url = new URL(window.location.href);
    var img = parseInt(url.searchParams.get("img"));
    var cat = url.searchParams.get("cat");
    var type = url.searchParams.get("type");
    if(img-1 >= 1){
        window.history.replaceState("","Galshtology","view.html?img=" + (img-1) + '&type=' + type + '&cat=' + cat);
        image();
    }
}

if (!window.location.pathname.includes("view.html")) {
	console.log("Type: " + type + ", category: " + current);
    show(current);	
} else {
    image();
}
