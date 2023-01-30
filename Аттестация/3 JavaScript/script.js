var colorCircles = [];
colorCircles[0] = document.getElementById('pink');
colorCircles[1] = document.getElementById('green');
colorCircles[2] = document.getElementById('black');
colorCircles[3] = document.getElementById('white');
colorCircles[4] = document.getElementById('orange');
colorCircles[5] = document.getElementById('magenta');
colorCircles[6] = document.getElementById('blue');
colorCircles[7] = document.getElementById('yellow');
colorCircles[8] = document.getElementById('red');
colorCircles[9] = document.getElementById('grey');

var targetColor="pink";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);


function pickColor(e) 
{
	if (e.target.tagName == "LI")
	{
		if (e.target.id=="pink") { targetColor = "pink"}
		else if (e.target.id=="orange") { targetColor = "orange"}
		else if (e.target.id=="green") { targetColor = "green"}
		else if (e.target.id=="black") { targetColor = "black"}
		else if (e.target.id=="white") { targetColor = "white"}
		else if (e.target.id=="magenta") { targetColor = "magenta"}
		else if (e.target.id=="blue") { targetColor = "blue"}
		else if (e.target.id=="yellow") { targetColor = "yellow"}
		else if (e.target.id=="red") { targetColor = "red"}
		else if (e.target.id=="grey") { targetColor = "grey"}


		for (var i = 0; i <= 9; i++) 
		{
			colorCircles[i].style.height = "50px";
			colorCircles[i].style.width = "50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}


var isMouseDown = false;
/Если в данный момент нажата мышь/
document.addEventListener('mousedown', function(event) {
if ( event.which ) isMouseDown = true;   
}, true);

/Если в данный момент НЕ нажата мышь/
document.addEventListener('mouseup', function(event) { 
if ( event.which ) isMouseDown = false;
}, true);

function drawOnCanvas(e){
	if (isMouseDown){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		/Размер кисти равен sliderValue.value/
		canvasContext.arc(e.offsetX, e.offsetY, sliderValue.value, 0, Math.PI*2);
		canvasContext.fill();
	}

}



var slider_value;
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('sliderValue');
slider.addEventListener("mouseup", updateAmount);

function updateAmount() 
{
	slider_value = slider.value;
	sliderValue.value = slider_value;
}

/Очистка холста/
function ClearCanvas() {
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}