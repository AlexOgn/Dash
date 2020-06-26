// Creating variables
let choveche=new Choveche();
choveche.randomize();
var isDead=0;
function dist(x1, y1, x2, y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
let enemies=[];
let brEnemies=5;
for(let i=0;i<brEnemies;i++){
	enemies[i]=new Enemies();
	enemies[i].randomize();
}

function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	while(isDead==0){
		for(let i=0;i<brEnemies;i++){
			enemies[i].update();
		}
		choveche.update();
	}
	
}

function draw() {
	// tuk naprogramirai kakvo da se risuva
	for(let i=0;i<brEnemies;i++){
		enemies[i].draw();
	}
	choveche.draw();
	/*if(isDead==1){
		context.fillRect(0, 0, 800, 600);
	}*/
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
