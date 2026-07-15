class Student {
    name : string;
    age : number;
   private sub : string []

    constructor (name : string,age : number,sub : string[]){
        this.name = name
        this.age = age
       this.sub =sub
    }
}

let aas = new Student("Aas Mohammad",25,["hindi","eng","PCM"])


