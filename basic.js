//am a single line comment
/*am a mutiple line comment

var x = 5;
var y = 6;

*/


console.log("hellow world");
// varaible
var x = 5;
console.log(x);
var name = "bibek";
console.log(name);
//arthametic operator
var a = 5;
var b = 6;
console.log(a / b);
console.log(a + b);
console.log(a - b);
console.log(a * b);

//assigment operator
let y = 50
let z = 10 + y;
console.log(z);

//data types_
var name = "bibek kunwar";
console.log(typeof (name));


var age = 30;
console.log(typeof (age));
var num = 9775776;
var myname = "bibek";
console.log(typeof (myname));

//Control statments

//1. if statment
var num = 9;
if (num == 9) {
  console.log("the number is 9");
}
//if else sttamentat
numb = 6;
if (numb == 9) {
  console.log("this is a number 9");
}
else {
  console.log("this is not a number 9");
}
// switch case
var grade = 'A';
console.log("Entering switch block");
switch (grade) {
  case 'A':
    console.log("Good job");
    break;

  case 'B':
    console.log("Pretty good");
    break;

  case 'C':
    console.log("Passed");
    break;

  case 'D':
    console.log("Not so good");
    break;

  case 'F':
    console.log("Failed<");
    break;

  default:
    console.log("Unknown grade")
}
console.log("Exiting switch block");


// while loop
count = 0;
console.log("number from 0 to 1");
while (count < 10) {
  console.log(count);
  count++;
}
//do while loop
do {
  console.log(count);
  count++;
}
while (count < 15);

//function
var l = 5;
var b = 6;
var h = 7;

function volume() { //function defined
  var vol = l * b * h;
  console.log(vol);

}
volume();


//creating object
console.log("creating object");
// JavaScript Object by object literal
emp1 = { id: 102, name: "Shyam Kumar", salary: 40000 }
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);


//By creating instance of Object
console.log("By creating instance of Object");
var emp = new Object();
emp.id = 101;
emp.name = "Bibek Kunwar";
emp.salary = 50000;
console.log(emp.id + " " + emp.name + " " + emp.salary);

//By using an Object constructor
console.log("By using an Object constructor");
function emp2(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
e = new emp2(103, "bibek Kunwaer", 30000);
console.log(e.id + " " + e.name + " " + e.salary);


//Defining method in JavaScript Object
console.log("Defining method in JavaScript Object");

function emp3(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;

  this.changeSalary = changeSalary;
  function changeSalary(otherSalary) {
    this.salary = otherSalary;
  }
}
e1 = new emp3(103, "Hira kali", 30000);
console.log(e1.id + " " + e1.name + " " + e1.salary);
e1.changeSalary(45000);
console.log(e1.id + " " + e1.name + " " + e1.salary);


//Array in js
console.log("Array in javascript");
var name = ["Bibek", "hira", "kali"];
for ( i = 0; i < name.length; i++) {
  console.log(name[i]);
}

console.log("second method for array");
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);



// constructor
console.log("constructor");
class Employee {
  constructor() {
    this.id = 101;
    this.name = "junu babs";
  }
}
var emp = new Employee();
console.log(emp.id + " " + emp.name)

//enscapsulation
class Student {
  constructor() {
    var name;
    var marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }

}
var stud = new Student();
stud.setName("B-bek Kunwar");
stud.setMarks(80);
console.log(stud.getName() + " " + stud.getMarks());

//polymmmorphiosm
class Student1 {
  constructor() {
    var name;
    var marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }

}
var stud = new Student1();
stud.setName("waran");
stud.setMarks(80);
console.log(stud.getName() + " " + stud.getMarks());

//abstraction
function Vehicle() {
  this.vehicleName = "vehicleName";
  throw new Error("You cannot create an instance of Abstract Class");
}
Vehicle.prototype.display = function () {
  return "Vehicle is: " + this.vehicleName;
}

function Bike(vehicleName) {
  this.vehicleName = vehicleName;
}

Bike.prototype = Object.create(Vehicle.prototype);
var bike = new Bike("Honda");
console.log(bike.display());