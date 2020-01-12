class Chain{
    constructor (bodyA, bodyB){
        var options = {
            bodyA : bodyA, 
            bodyB : bodyB,
            stiffness : 0.9, 
            length : height - (height / 4),
        };
            this.chain = Matter.Constraint.create(options);
            World.add(world, this.chain);
    }
    display(){
        var bodyApos = this.chain.bodyA.position;
        var bodyBpos = this.chain.bodyB.position;
        fill(255, 255, 0, 255);
        strokeWeight(5);
        line(bodyApos.x, bodyApos.y, bodyBpos.x, bodyBpos.y);
    }
}