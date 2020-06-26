class Choveche{
	constructor(){
		this.x=0;
		this.y=0;
		this.dx=0;
		this.dy=0;
		this.speed=2;
		this.randomize();
	}
	randomize(){
		this.x=Math.random()*800;
		this.y=Math.random()*600;
	}
	Draw(){
		context.beginPath();
		context.arc(this.x, this.y, 30, 0, 2*Math.PI);
		context.closePath();
		context.strokeStyle="black";
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