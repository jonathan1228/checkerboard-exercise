// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for(var row = 0; row < 9; row++){

	for(var col = 0; col < 9; col++){
	
		var square = document.createElement('div');

		if((col + row) % 2 === 0){
			square.style.backgroundColor = "black";
		}
		else{
			square.style.backgroundColor = "red";
		}
		square.style.width = "11.1%";
		square.style.paddingBottom = "11.1%";
		square.style.float = "left";

		body.appendChild(square);			
	}

}