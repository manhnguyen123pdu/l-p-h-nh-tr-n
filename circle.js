class circle {
    radius;
    color;

    constructor(radius,color){
        this.color=color;
        this.radius=radius;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let value=Math.PI*(this.radius+this.radius);
        return value;
    }
}

let circle1=new circle(100,'yellow')