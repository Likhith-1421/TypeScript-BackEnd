// Normal Array

let array : number [] = [1,3,2,4,5]
console.log(array)

//ARRAY<type>

let values : Array<string> = ["Likhith" , "Vaishnavi"]
console.log(values)

//Union 

let mixed : (number | string)[]  = [ 291 ,"Likhith", 19,"Vaishnavi"]
console.log(mixed)

//Tuple

let tuple : [string , number, string?] = ["Likhith", 29]
console.log(tuple)                       // if any boolen or any other value added to the array it will throw error

//READONLY array
let Read : readonly[string,number] = ["Likhith" , 29]
console.log(Read)                       // can't modify existing array just only to read the array