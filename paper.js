class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:1
        }

        this.x = x;
		this.y = y;
		
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options)

        this.image = loadImage("paper.png");

        World.add(world, this.body);

    }
    display(){
        var pos =  this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*2.8, this.radius*2.8);

    }


}