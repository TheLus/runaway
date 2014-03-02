var btn = document.getElementsByClassName("js-create-gist");
btn[0].style.position = "absolute";
btn[0].style.left = "" + (btn[0].offsetLeft - btn[0].offsetWidth) + "px";
btn[0].style.top = "" + btn[0].offsetTop + "px";

var fx = btn[0].offsetLeft + btn[0].offsetWidth / 2;
var fy = btn[0].offsetTop + btn[0].offsetHeight / 2;

function getMousePosition(e) {
  var obj = new Object();

	if(e) {
		obj.x = e.pageX;
		obj.y = e.pageY;
	} else {
		obj.x = event.x + document.body.scrollLeft;
		obj.y = event.y + document.body.scrollTop;
	}
	return obj;
}

window.document.onmousemove = function(e){
	var mX = getMousePosition(e).x;
	var mY = getMousePosition(e).y;
	var x = parseInt(btn[0].style.left) + btn[0].offsetWidth / 2;
	var y = parseInt(btn[0].style.top) + btn[0].offsetHeight / 2;
 
var theta = Math.atan2(y - mY, x - mX);
	var d = 1000 / Math.sqrt((mX - x) * (mX - x) + (mY - y) * (mY - y));
	btn[0].style.left = "" + (x + d * Math.cos(theta) + (fx - x) * 0.05 - btn[0].offsetWidth / 2) + "px";
	btn[0].style.top = "" + (y + d * Math.sin(theta) + (fy - y) * 0.1 - btn[0].offsetHeight / 2) + "px";
}

