function likhith(a : number , b : number) : number 
{
      return a + b
}
const resu =likhith(2,3)
console.log(resu)




const likhithh =(a : string, b : number) :(string|number) =>
{
     return `Hello ${a} price ${b}`
}
const resul = likhithh("vivoo" , 20000)
console.log(resul)





type name = {
  value :  string
};
type num = {
    rollno : number
}
const  inter =(data :name & num ) =>
{
    return  `Hello ${data.value} RollNumber ${data.rollno}, `
}