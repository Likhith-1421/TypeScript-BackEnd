Arrays
====================
Collection of multiple values that store in a variable called as Arrays.

Basic syntax
   let arrayname : type[] = [values]


Types to define Arrays 
-----------------------
 normal way       =>     let arrayname : type[] = [values]   
 array<type>      =>     let arrayname : Array<type> = [values]
 union array      =>     let arrayname : (type1 | type2) [] = [values]
 tuple            =>     let arrayname : [type1,type2] = [vales1,value2]     
 note = in tuple the values  should be equal and match to the array type if not a error will occure
 ReadOnly array   =>     let arrayname : readonly type[] = [values]
 note = we can't modify the existing array we just read the existing array
 Object Array     =>      let arrayname : {key:type1, key:type2}[] = [{key:value1,key:value2}]


 Array Methos 
 ======================
 Array Methods are used to perform the CURD operations and also used to update the existing array

Mutating array methods                                 Higher Order array Methods
 push  => add value at end                                          map 
 pop   => remove value at end                                       filter
 shift => remove first elemet                                       reducer
 unshift => add first element                               


 