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




//push()

let push : number [] = [2,3,4]
push.push(5)
console.log(push)                  // add value to last 


//pop()
let pop : Array<string> =["likhith","vaishnavi","gayathri"]
pop.pop()
console.log(pop)                    // pop doesn't take any argument it will delete last value in array


//shift
let shift : Array<string> = ["likhith","vaishnavi","gayathri"]
shift.shift()
console.log(shift)                   //Removes 1st element  


//unshift
let unshift : Array<string> =["LIKHITH", "VAISHANVI"]
unshift.unshift("Gayathri")
console.log(unshift)                 //add gayathri to 0th index


//MAP
let map : number[] = [2,3,4,5,6,7]
let results = map.map((x)=>(x*5))
console.log(results)   // Basically map will returns a new array can't modify the existing array

//filter 
let responce : number[] = [19,2,22,3,34,12,5,43,18]
let result2 = responce.filter(e=>e>18)
console.log(result2)

//splice
let splice : string[] = ["Likhith" ,"Vaishnavi" ,"Gayathri"]
splice.splice(2,1)
console.log(splice)



