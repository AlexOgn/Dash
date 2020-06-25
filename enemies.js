class Enemies{
	constructor(){
		this.x=0;
		this.y=0;
		this.dx=0;
		this.dy=0;
		this.speed=1;
	}
	randomize(){
		this.x=Math.random()*800;
		this.y=Math.random()*600;
	}
	draw(){
		context.beginPath();
		context.arc(this.x, this.y, 30, 0, 2*Math.PI);
		context.closePath();
		context.strokeWeight=10;
		context.strokeStyle="red";
		context.stroke();
	}
	update(){
		let d=dist(choveche.x, choveche.y, this.x, this.y)
		this.dx=(choveche.x-this.x)/d*this.speed
		this.dy=(choveche.y-this.y)/d*this.speed
		if(d<5){
			this.dx=0;
			this.dy=0;
		}
		this.x+=this.dx;
		this.y+=this.dy;
	}
}