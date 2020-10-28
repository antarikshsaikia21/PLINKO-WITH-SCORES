class Ground {
 
constructor(x,y,width,height){

  var options = {
    isStatic: true
  }
  
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
    fill("green");   
    var pos = this.body.position
    rectMode(CENTER);
    rect(200,590,800,20);
        
    
  }
   
}