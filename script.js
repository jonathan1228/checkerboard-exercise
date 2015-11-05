// Your JS goes here

var body = document.getElementsByTagName('body')[0];
var color = 82;
for(var row = 0; row < 9; row++){

	for(var col = 0; col < 9; col++){
		color += 4;
		if((col + row) % 2 === 0){
			var square = makeDiv(("'rgb(365, " + color + ", 100)'"));
		}
		else{
			var square = makeDiv("'rgb(365, " + color + ", 100)'");
		}
		body.appendChild(square);			
	}

}
function makeDiv(color) {

	var square = document.createElement('div');
	// modifies div
	
	square.style.backgroundColor = color;
	square.style.width = "11.1%";
	square.style.paddingBottom = "11.1%";
	square.style.float = "left";
	return square;
				
};
function randomColor(){
	var color = "#";
	var colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	for(var i = 0; i < 6; i++){
		color += colors[Math.floor((Math.random() * 15) + 1)];
	}
	return color;


}
function colorizer_base(){
	var colors = "'rgb(365, " + color + ", 100)'";
	return colors;

}
​
function colorizer_gradient(){
	var colors = "'rgb(180, " + color + ", 19)'";
	return colors;


}
​
