class Rope{
        constructor(bodyA,pointB){
            var options={
                bodyA:bodyA,
                pointB:pointB,
                stiffness:0.04,
                lenght:300
            }
            this.pointB=pointB
            this.Rope=Constraint.create(options)
            World.add(world,this.Rope);
        }

        display(){
            
            var pointA=this.Rope.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
}
