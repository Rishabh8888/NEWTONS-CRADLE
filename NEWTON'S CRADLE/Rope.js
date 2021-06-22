class Rope{
    constructor(body1,body2,offsetX,offsetY){
         this.offsetX = offsetX
         this.offsetY = offsetY
        var options = {
          bodyA: body1,
          bodyB: body2,
          pointB:{x:this.offsetX,y:this.offsetY}
         }
         this.rope =  Constraint.create(options);
         World.add(world,this.rope);
    }
    show(){
         var pos1 = this.rope.bodyA.position;
         var pos2 = this.rope.bodyB.position;
         stroke(0)
         strokeWeight(5);
         line(pos1.x,pos1.y,pos2.x, pos2.y);
    }
}