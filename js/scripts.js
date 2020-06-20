var x;
x=5;
var x1,x2;
x1="hello";
x2="perro";
var x3=x1+x2;
x.toExponential(2);
x.toFixed(2);
//this comentario es ejemplo inutil owo
var y = 10;
var dec=1.3;
var nada="";
var nulo=null;
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
var pos = str.search("Y");

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue";
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
person = undefined;
y *= 5;

var sum=suma(1,2);
var car = ["Fiat","500", "white"];
car.pop();
car.push("green");
car.sort();
car.reverse();

var tx = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
function forcito(value, index, array) {
    tx = tx + value + "<br>";
}
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo").innerHTML = d;
var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;

var pi =Math.PI; 
pi = Math.round(pi);
var raiz =Math.sqrt(64);
var absolu=Math.abs(-4.7);
var rand1 =Math.floor(Math.random() * 10);


function myFunction2() {
    document.getElementById("dropdown-we").innerHTML = window.alert("so sad");
}
function suma(n1,n2){
    if (isNaN(n1)|| isNaN(n2)) {
        return null;
    }else{
        return n1+n2;
    }
}
function showme(){
    document.getElementById("dropdown-we").innerHTML = person["firstName"] + " " + person["lastName"];
}

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("dimo").innerHTML = "Hoy es " + day;
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
do {
    text += "The number is " + i;
    i++;
    if (i == 10) {
        break;
    }else{
        continue;
    }
  }
  while (i < 10);
var str=String(100 + 23);
var x4 = 5 | 1;
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "our restaurant");
function myinput() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
}
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return "I have a " + this.carname;
    }
  }
  
  mycar = new Car("Ford");
  document.getElementById("dimi").innerHTML = mycar.present();