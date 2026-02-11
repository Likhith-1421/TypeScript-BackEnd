// ANY EXMAPLE 
let name2 : any 
name2 = "Likhith";
name2= 34769598;
name2 = true;

console.log(name2)     


//ANY EXAMPELE
let data: any = "Hello";
console.log(data.toUpperCase())  



//UNKNOWN
//Based on the condition unknown will run
let PhoneNumber : unknown = "Likhith"
if(typeof PhoneNumber == "number")
{
    console.log("Correct Number")
}
else{
    console.log("Incorrect Number")

}


//void
// if we don't wnat to return any value form a function then we use void 
function likhith(a : number , b : number) : void

{
     console.log(a + b)
}
likhith(3,2)


//Never
//For Error handle cases
type names = "likhith" | "vaishnavi"

function never(data : names){
    if(data == "likhith")
    {
        console.log("Hello Likhith")
    }
    else if(data == "vaishnavi")
    {
        console.log("Hello Vaishnavi")
    }
    else {
        const check : never = data
    }

}

never("vaishnavi")


//Union  
//Can use mixed datatypes
const datatypes : string | number = "214G1A0291"
console.log(datatypes)
