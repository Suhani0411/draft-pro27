class Slingshot{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            pointB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        //this.pointB=pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

 

    display(){
        if(this.slingshot.bodyA){
        
        var pointA = this.slingshot.bodyA.position;
        var pointB= this.pointB;
        strokeWeight(4);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}