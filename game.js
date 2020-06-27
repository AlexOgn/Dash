// Creating variables
var dash = 1, maxDash = 10, duration = 200;

var numberOfDead=0;
var isDashing = false;
var isWin=0;
var alerted=false;

let choveche=new Choveche();
let Canvas = document.getElementById("canvas-id");

function dist(x1, y1, x2, y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

let enemies=[];
let brEnemies=5;
for(let i=0;i<brEnemies;i++){
	enemies[i] = new Enemies(Canvas, choveche);
}

function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	
	if(numberOfDead==brEnemies){
		brEnemies--;
		isWin=1;
	}
	if(isWin==1 && alerted==false){
		alert("You Win!");
		alerted=true;
	}
	if(isDead==0 || isWin!=0){
		choveche.update();
		for(let i=0;i<brEnemies;i++){
			enemies[i].update();
		}
		console.log(isDead, isWin)
	}
	
	
	if(isKeyPressed[32]){
		dash = maxDash;
		isDashing = true;
		setTimeout(() => {dash = 1}, duration);
	}else{
		isDashing = false;
	}
}

function draw() {
	// tuk naprogramirai kakvo da se risuva
	for(let i=0;i<brEnemies;i++){
		enemies[i].draw();
	}
	choveche.draw();
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
