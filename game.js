// Creating variables
class Enemies{
	constructor(){
		this.x=0;
		this.y=0;
		this.dx=0;
		this.dy=0;
		this.speed=1;
		this.dist;
	}
	randomize(){
		this.x=Math.random()*800;
		this.y=Math.random()*600;
	}
	draw(){
		context.beginPath();
		context.arc(this.x, this.y, 30, 0, 2*Math.PI);
		context.closePath();
		context.stroke();
	}
	update(){
		let d=dist(mouseX, mouseY, this.x, this.y)
		this.dx=(mouseX-this.x)/d*this.speed
		this.dy=(mouseY-this.y)/d*this.speed
		if(d<5){
			this.dx=0;
			this.dy=0;
		}
		this.x+=this.dx;
		this.y+=this.dy;
	}
}
function dist(x1, y1, x2, y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
let enemies=[];
let brEnemies=5;
for(let i=0;i<brEnemies;i++){
	enemies[i]=new Enemies();
	enemies[i].randomize();
}
console.log((enemies))

function update() {
	//console.log(enemies);
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	for(let i=0;i<brEnemies;i++){
		enemies[i].update();
	}
}

function draw() {
	// tuk naprogramirai kakvo da se risuva
	for(let i=0;i<brEnemies;i++){
		enemies[i].draw();
	}
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
