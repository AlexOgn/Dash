class Enemies{
	constructor(canvas, choveche){
		this.x=0;
		this.y=0;
		this.dx=0;
		this.dy=0;
		this.speed=1;
		this.randomize(canvas, choveche);
	}
	randomize(canvas, choveche){
		// this.x=Math.random()*700;
		// this.y=Math.random()*700;
		let dst = dist(this.x, this.y, choveche.x, choveche.y);
		if(dst >= 50){
			this.x = canvas.width - choveche.x + Math.random()*500;
			this.y = canvas.height - choveche.y + Math.random()*500;
		}
		//console.log(enemies, choveche);
		
	}
	Draw(){
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
		if(d<61){
			isDead=1;
		}
		if(d<5){
			this.dx=0;
			this.dy=0;
		}
		this.x+=this.dx;
		this.y+=this.dy;
	}
}