class Platforms{
    constructor(x,y,width,height){
        var options={isStatic:true}
        this.Bodies=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("Images/platform.jpg")
        World.add(world,this.Bodies)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.Bodies.position.x,this.Bodies.position.y,this.width,this.height)
        pop()

    }
}