/*var x = 15;
{
    const x = 5;
    console.log(x);
    x = 6;
    console.log(x);
}
console.log(x);


-In a normal function,the this  keyword refers to the 
object inside which the function is present
var x = function(x,y)
{
    return x + y;
};*/

/*-In arrow function, this keyword is present inside the global scope/overall class its
 defining or the object from which it was invoked.
 - Arrow function immediately returns something.(shorthand syntax,do not have their own 
 "this" keyword,have to be defined before use,not well suited for defining object methods 
const x =(x,y) => 
{
    return x + y;
};
console.log(x(5, 6));*/  


/*Spread Operator(...) expands any iterable or an array like Data str. into its own elements.
const q1 = ["Jan","Feb","Mar"];
const q2 = ["Apr","May","Jun"];
const q3 = ["Jul","Aug","Sep"];
const q4 = ["Oct","Nov","Dec"];
const year = [...q1,...q2,...q3,...q4];
console.log(year);

const Num =[90,80,89,70,67];
let maxVal=Math.max(...Num);
console.log(maxVal);


const Num =[90,80,89,70,67];
let sum=0;
for(let n of Num)
    {
        sum=sum+n;
    }
console.log(sum);


const name = "CipherSchools";
let text = "";
for(let ch of name)
    {
        text += ch + " ";
    }
console.log(text);*/

/*Map Object
const fruits = new Map([["apples",500],["bananas",300],["guavas",700]]);
console.log(fruits);
console.log(fruits.get("guavas"));*/

/*Sets
const letters = new Set();
letters.add("a")
letters.add("b")
letters.add("a")
console.log(letters);*/

/*Unexpected Class only a constructor
class Car
{
    constructor(name, mfgYear)
    {
        this.name = name;
        this.mfgYear = mfgYear;
    }
}
const myCar1 = new Car("Mercedes", 2022);
const myCar2 = new Car("Porsche", 2020);
console.log(myCar1,myCar2);

const myFunction = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                console.log("This is Inside Promise");
                resolve();
            }, 2000);
        });
    };

myFunction()
 .then(() => {
    console.log("Resolved");
 })
 .catch(() => {
    console.log("Rejected");
 });


const person ={
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyecolor: "blue",
};
let id = Symbol("id");
person[id] = 140111;
console.log(person);*/


const addNumbers = (...args) => {
    let sum = 0;
    for(let arg of args) {
        sum +=arg;
    }
    return sum;
};
console.log(addNumbers(10,14,16,22,1,45));
