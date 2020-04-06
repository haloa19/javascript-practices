console.log(Rect.prototype);
window.addEventListener('load', function() {
	var rects = [
		new Rect(100, 100, 200, 300, "#00f"), 
		new Rect(250, 250, 400, 400, "#0f0"), 
		new Rect(300, 450, 500, 600, "#f00")];
	
	var index = 0;
	var intervalID = setInterval(function(){
		if(index >= rects.length) {
			clearInterval(intervalID);
			return;
		}
		rects[index].show();
		console.log(rects[index].hasOwnProperty("x1"));
		index++;
	}, 1000);
	
});
