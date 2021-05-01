

myBirthYearFunc();
function myBirthYearFunc() {
    console.log("I was born in" + 1980); // I was born in1980
}

var birthYearInput = 1980;
myBirthYearFunc(birthYearInput);
function myBirthYearFunc(birthYearInput) {
    console.log("I was born in" + birthYearInput); // I was born in1980
}

// Observation: request the two functions with the same name may create confliction. 
//              I got I was born inundifined 

var num1 = 10;
var num2 = 20;
add(num1, num2);
function add(num1, num2) {
    console.log("Summing Numbers!"); // Summing Numbers!
    console.log("num1 is: " + num1); // num1 is: 10
    console.log("num2 is: " + num2); // num1 is: 20
    var sum = num1 + num2;
    console.log(sum);               // 30
}