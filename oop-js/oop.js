class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
        this.another = function(){
            console.log('another');
        }
    }
    name = 'Sany'
    show = function(){
        console.log('Showing');
    }
    draw(){
        console.log('drawing')
    }
}
 
let rect1 = new Rectangle()
// rect1.another()
// rect1.draw(45,23)
// rect1.show()
// console.log(rect1.name); 
// console.log(rect1);

//  Static Method

// class Person{
//     constructor(name,country){
//         this.name = name;
//         this.country = country;
//         this.hello = function(){
//             console.log('Hello');
//         }
//     }
//     show(){
//         console.log(this.name, this.country);
//     }

//     static create(name){
//         console.log('hello', name);
        
//     }
// }

// let obj = Person.create('Sany')
// //  let obj = new Person('sany','BD')
// // obj.print()
 
// Abstract a data using Symbol

// const _radius = Symbol()
// const _draw = Symbol()
// class Circle{
//     constructor(radius){
        // this[_radius] = radius;
//     }

//     draw(){
//         console.log('Drawing');
//     }

//     [_draw](){
//         console.log('Drawing');
//     }
// }

// let obj = new Circle(2)

// obj.draw()

// Abstract a data using WeakMap

// const _radius = new WeakMap()
// const _draw = new WeakMap()
// const _resize = new WeakMap()
// class Circle{
//     constructor(radius){
//         _radius.set(this,radius)
//         _resize.set(this,()=>{
//             console.log("resizing");
//         })
//     }

//     draw(){
//         console.log('Drawing');
//         console.log(_radius.get(this));
//         _resize.get(this)();
//     }
//     get radius(){
//         return _radius.get(this)
//     }
//     set radius(v){
//         return _radius.get(this,v)
//     }
//     [_draw](){
//         console.log('Drawing');
//     }
// }

// let obj = new Circle(2)

// obj.draw()
// obj.radius = 100
// console.log(obj.radius);  


//

class Vcl{
    constructor(){
        console.log('Vcl Name');
    }
    output(){
     
    }
}

class Car extends Vcl{
    constructor(name){
        super();
        console.log(this.name = name)
    }
    output(){ //method overriding
        console.log('My');
    }
}

let obj = new Car('bmw')