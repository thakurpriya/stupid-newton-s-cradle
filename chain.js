class Chain{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.chain=Constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var pointA=this.chain.bodyA.position;
		var pointB=this.chain.bodyB.position;

		strokeWeight(3.5);

		var onex=pointA.x
		var oney=pointA.y

		var twox=pointB.x+this.offsetX
		var twoy=pointB.y+this.offsetY

		line(onex,oney,twox,twoy);
	}

}