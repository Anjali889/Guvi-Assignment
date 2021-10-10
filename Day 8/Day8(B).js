//Convert the UML diagram to Typescript class. - use number for double


class Circle
{
    constructor(radius=1.0,color="red")
    {
       this.radius= radius;
       this.color=color;
    }

    getRadius()
    {
        console.log(this.radius);
    }

    setRadius(radius)
    {
        this.radius=radius;
    }

    getColor()
    {
        console.log( this.color);
    }

    setColor(color)
    {
        this.color=color;
    }

    toString()
    {                 
        console.log( "Radius :"+ this.radius+ " Color :" +this.color);
    }

    getArea()
    {   //pi(r^2)
        console.log(3.141*(this.radius*this.radius));
    }

    getCircumference()
    {
        //2*pi*r
        console.log(2*3.141*this.radius);
    }
}

c1= new Circle();
c1.toString()

c2=new Circle(5.5);
c2.toString();

c=new Circle(2,"Yellow");

c.getRadius()
c.setRadius(3) 
c.getColor()
c.setColor("green")
c.toString()
c.getArea()
c.getCircumference()
