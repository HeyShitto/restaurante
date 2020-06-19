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


function myFunction() {
    document.getElementById("dropdown-we").innerHTML = window.alert("so sad");
}
function suma(n1,n2){
    return n1+n2;
}
function showme(){
    document.getElementById("dropdown-we").innerHTML = person["firstName"] + " " + person["lastName"];
}