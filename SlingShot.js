class SlingShot{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
    }

    fly(){
        this.sling.pointA = null;
    }

    display(){
       

        if(this.sling.pointA){
            var pointA = this.sling.pointA.position;
            var pointB = this.pointB;
         
            

    
}
    }