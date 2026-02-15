

// const arrayss : number[] = [12,43,5,76,11,10]
// const resultss = arrayss.filter((e)=>e>18)
// console.log(resultss)

// interface O



function vote(age : number ) : string {
    
     if(age >=18)
    {
        return (`since your age is ${age } you are elegible`)
    }
    else{
        return(`inelegibe because your age is ${age} under 18` )
    }
   
}
const voter  = vote(10)
console.log(voter)



// const voters = (age : Array<number>) : string=>{
 
// const voterss = age.filter((e)=>e>=18)
// console.log(voterss)

// return ("you are elegible")

// }

// voters([13,42,15,18,19,20,22,43,34])


const whether = (temp : number ): string => 
{
    if(temp > 30)
    {
        return (`heyy its ${temp} hot `)
    }
    else if (temp >=15 && temp <30)
    {
        return (`heyy its ${temp} modrate `)
    }
    else 
    {
        return(`heyy its ${temp} cold `)
    }
}

const wheth = whether(17)
console.log(wheth)


const evenodd =( a : number)  :string =>
{
     return a%2==0?"even": "odd"
  
    
}
const EVENODD = evenodd(16.9)
console.log(EVENODD)



const string = (name : string) : string =>
{
    return (name.toUpperCase())
}
const STRING = string("likhithpbk@gmail.com")
console.log(STRING)




const maximum : number[] = [28,38,19,29,30]

let max = maximum[0]
for(let i =1; i<maximum.length;i++)
{
    if(maximum[i]>max)
    {
          max = maximum[i]
    }
     max
}
console.log(max)



const adult : number[] = [28,38,19,29,30,12,4,16]
const ADULT = adult.filter((e)=>e>=18)
{
    console.log(ADULT)
}



const sum : number[] = [2,3,4,5,6]
let sums = 0


for(let i = 0; i<sum.length;i++)
{
   sums =sums + sum[i]     

}
console.log(sums)

