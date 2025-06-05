class Animal{
    constructor(name,legcount,speaks){
        let nameInClass= name;
        this.speaks = speaks; 
        this.legcount= legcount;
        console.log(`${nameInClass} with ${this.legcount} legs does ${this.speaks}`);
    }
    speak(){
        console.log("hi there "+this.speaks);

    }
    //static functions are associated with the class instead of the object 
    static myType(){
        console.log("this is a static function");
    }


}

let dog  = new Animal("dog",4,"bhow bhow");
let cat = new Animal("cat",4,"meow");
dog.speak();
Animal.myType();




