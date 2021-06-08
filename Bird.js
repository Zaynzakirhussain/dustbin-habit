class paper extends BaseClass{
  constructor(x,y){
    super(x,y,35,35);
    this.image = loadImage("paper.jpg");
  }
  display(){
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
  
}
