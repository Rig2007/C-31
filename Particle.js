class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 7;
        this.body = Bodies.circle(x, y, r, options);
        //give color property 
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};