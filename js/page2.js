class Person{

    constructor(name,age){
        this.name = name;
        this.age  = age;
    }


    output(){
         console.log(`Person name is ${this.name} and age is ${this.age} `);
    }

}

export {Person}