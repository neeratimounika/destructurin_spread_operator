//arrays destructuring in js 
const city=['hyderabad','delhi','banglore','chennai'] 
const [firstEl,secondEl,thrdEl,frthEl]=city 
console.log(firstEl);
console.log(secondEl);
console.log(thrdEl);
console.log(frthEl) 

//using ES6 arrays destructuring js 
 function calculator(a,b){
    const add = a+b 
    const sub = a-b 
    const mult = a*b 
    const devision=a/b 
    return [add,sub,mult,devision]
 }
 const[addition,substraction,multiplication,devision]=calculator(23,19)
 console.log(addition)
 console.log(substraction)
 console.log(multiplication)
 console.log(devision) 

 //common destructuring objects in js 
 const person ={
    name:'mounika',
    age:29,
    gender:'female',
 
 }

 console.log(person.name)
 console.log(person.age)
 console.log(person.gender)


 //ES6 destructuring objects in js 
 const persons = {
        names: 'sachin',
        age: 50,
        gender: 'male'
    
    }
    const {names, age, gender} = persons


console.log(names)
console.log(age)
console.log(gender)




 //arrays using spread operator 
 //It is used to quickly copy all or part of an existing array or object into another array or object


 

const arr1 = [10,20,30]
const arr2 = [30,60,70,80]


const mergedArrays = [...arr1, ...arr2]




const [first, second, ...rest] = arr2


console.log(first)
console.log(second)
console.log(rest)

//es6 obects using spread operator 
const object1 = {
    'a': 100,
    'b': 2,
    'c': 3,
    'd': 4
}
const object2 = {
    'a': 10,
    'e': 5,
    'f': 6,
    'g': 7,
    'c': 20
}


const mergedObjects = {...object1, ...object2}


console.log(mergedObjects)
