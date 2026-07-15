// type inference means ts will automaitically understand that this will be the type but type
// inference means you to tell the type splicitly.

let name = "Aas Mohammad"//Inference - string
let a = Math.random() > 0.5 ? 10 : "Less Then 0.5" // Inference - string or number

let myName: string = "Aas Mohammad" // Annotation
let numOrStr: string | number = Math.random() > 0.5 ? 10 : "Less Then 0.5" //Annotation

console.log(name,a,myName,numOrStr)