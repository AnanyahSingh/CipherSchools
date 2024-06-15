/* Object Literal-
let person = {
    firstName: "Ananya",
    lastName: "Singh",

    getFullName: function() {
        return `The name of the person is ${this.firstName} ${this.lastName}`;
    },
    phoneNumber: {
        mobile: "12345",
        landline: "6789",},
};
console.log(person.getFullName());
console.log(person.phoneNumber.landline);


OBJECT CONSTRUCTOR-
function person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
let person1 = new person("Ananya", "Singh");
let person2 = new person("Apratim", "Singh");
console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);


OBJECT.CREATE{}-
const coder = {
    isStudying: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}, Am I Studying?: ${this.isStudying}`);
    },
};
const me = Object.create(coder);
me.name = "Ananya Singh";
me.isStudying = true;
me.printIntroduction();


CLASSES-
class Vehicle{
    constructor(name,maker,engine){
        this.name =name;
        this.maker =maker;
        this.engine =engine;
    }
    getDetails(){
        return `the name of the vehicle is ${this.name}`;
    }
}
let v1=new Vehicle("Creta","Hyundai","2500cc");
let v2=new Vehicle("05","Audi","3000cc");
console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());

function Vehicle(name,maker,engine){
    this.name =name;
    this.maker =maker;
    this.engine =engine;
}
Vehicle.prototype.getDetails= function(){
    return`the name of the vehicle is ${this.name}`;
}
let v1=new Vehicle("Creta","Hyundai","2500cc");
let v2=new Vehicle("05","Audi","3000cc");
console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());*/

/*class Person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    };
    addAddress(newAddress){
        this.address=newAddress;
    getDetails(){
        console.log(`Name is: ${this.name}, and address is ${this.address}`);
    }
    let person1= new Person("Ananya",22);
    person1.addAddress("Lucknow");
    person1.getDetails();
    console.log(person1.getDetails_NoAccess());
    console.log(person1.getDetails_Access());
    };*/
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
/*    let getDetails_NoAccess= function(){
        return`First name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
    let getDetails_Access = function(){
        return`First name is: ${this.firstName} and last name is: ${this.lastName}`;
    };*/

    getDetails = function () {
    return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
};
}
class Student extends Person{
    constructor(firstName,lastName,rollNumber){
//super=calls the constructor of its parent class to access the parent's properties and methods.
        super(firstName,lastName);
        this.rollNumber = rollNumber;
    }
    getDetails= function(){
        return`First name is: ${this.firstName} and last name is: ${this.lastName} and the roll number is: ${this.rollNumber}`;
    };
}

let person1 = new Person("Ananya", "Singh");
console.log(person1.firstName);
console.log(person1.getDetails());

let student1= new Student("Ananya","Singh",22);
console.log(student1.getDetails())
