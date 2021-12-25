//2. Write the following functions

//a)  Write a function called “addFive”.Given a number, “addFive” returns 5 added to that number.
var num = 5;
function addFive(num) { 
  return num + 5;
}
var result = addFive(num);
console.log(result);

/* output
10
*/

//b)Write a function called “getOpposite”.Given a number, return its opposite (sign):
function getOpposite(num) 
{

    if (typeof(num) == "number") 
    {
    return -num;
    } else {
    return -1;
           }
}
var result = getOpposite(5)

console.log(result);

/*output
-5
*/

//c) Fill in your code that takes an number minutes and converts it to seconds.
//Examples:
//toSeconds(5) ➞ 300
//toSeconds(3) ➞ 180
//toSeconds(2) ➞ 120
function toSeconds(min) {
    return min * 60;
}
var secs = toSeconds(5)
console.log(secs)

/*output
300
*/

//d)Create a function that takes a string and returns it as an integer.
//Examples
//toInteger(“6”) ➞ 6
//toInteger(“1000”) ➞ 1000
//toInteger(“12”) ➞ 12
var mystr = "1000";
function toInteger(mystr) {
     return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint);

/*
Output:
1000
*/

//e) Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//Examples
//nextNumber(0) ➞ 1
//nextNumber(9) ➞ 10
//nextNumber(-3) ➞ -2
var myint = 0;
function nextNumber(myint) {
    return myint + 1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

/* output
1
*/

//f) Create a function that takes an array and returns the first element.
//Examples
//getFirstElement([1, 2, 3]) ➞ 1
//getFirstElement([80, 5, 100]) ➞ 80
//getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];
function getFirstElement(arr) {
     return arr[0];
}
var data = getFirstElement(arr)
console.log(data);

/*output
1
*/

//g) Convert Hours into Seconds.Write a function that converts hours into seconds.
//Examples
//hourToSeconds(2) ➞ 7200
//hourToSeconds(10) ➞ 36000
//hourToSeconds(24) ➞ 86400

function hourToSeconds(arr) {
    return arr * 60 * 60;
}
var data = hourToSeconds(2)
console.log(data);

/* output
7200
*/

//h) Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
//Examples
//findPerimeter(6, 7) ➞ 26
//findPerimeter(20, 10) ➞ 60
//findPerimeter(2, 9) ➞ 22
function findPerimeter(num1,num2) {
    return 2 * (num1 + num2);
}
var perimeter = findPerimeter(6,7);
console.log(perimeter);

/*output
26
*/

//i) Less Than 100?Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//Examples
//lessThan100(22, 15) ➞ true
// 22 + 15 = 37
//lessThan100(83, 34) ➞ false
// 83 + 34 = 117
function lessThan100(num1,num2) {
    let sum = num1 + num2;
     if (sum < 100) {
       return true;
     } else return false;
    }
    var res = lessThan100(22,15);
    console.log(res);
    //---------------------------------
    
    function lessThan100(num1,num2) {
     let sum = num1 + num2;
      if (sum < 100) {
        return true;
      } else return false;
    }
    var res = lessThan100(83, 34);
console.log(res);

/* output
false
*/

//j)There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
//Examples
//remainder(1, 3) ➞ 1
//remainder(3, 4) ➞ 3
//remainder(-9, 45) ➞ -9
//remainder(5, 5) ➞ 0
function remainder(num1,num2) {
    return (num1 % num2);
    }
    var res = remainder(-9,45);
    console.log(res);

/*output
-9
*/

