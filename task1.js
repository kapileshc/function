//a) Print odd numbers in an array:
(function (arr) 
        {
         let odd = [];
          for (let i in arr) {
         if (arr[i] % 2 !== 0) {
odd.push(arr[i]);
        }
      }
        console.log(odd);})
   ([1, 2, 3, 4, 5, 6,7,8]);

   /* output
   [ 1, 3, 5, 7 ]
   */

//b) Convert all the strings to title caps in a string array:
let caps = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  
  console.log(caps("javascript"));
  
  /*Output:
Javascript
*/

//c) Sum of all numbers in an array
var arr = [11, 12, 13, 14,15];
var total = 0;
for (var i in arr) {
  total += arr[i];
}
console.log(total);
/* output
65
*/

//d) Return all the prime numbers in an array

let prime = function (arr) {
    return arr.filter((n) => {
      for (let i = 2; i< n; i++) {
        if (n % i === 0) return false;
      }
      return n> 1;
    });
  };
  console.log(prime([2,3,7,9,13,19,21,35]));
  
  /*
  Output:
  [ 2, 3, 7, 13, 19 ]
  */

  //e) Return all the palindromes in an array
  var words = ['amma', 'racecar', 'apple', 'porcupine', 'appa','live', 'level'];
var arr = [];
var str = words.slice(0);
var palndrm = str.toString().split("").reverse().join("").split(",");
console.log(palndrm);
for (let i = 0; i<words.length; i++) {
  for (let z = 0; z <palndrm.length; z++) {
    if (words[i] == palndrm[z]) {
arr.push(words[i])
    }
  }
} console.log(arr);

/*
Output:
[ 'level', 'evil', 'appa', 'enipucrop', 'elppa', 'racecar', 'amma' ]


[ 'amma', 'racecar', 'appa', 'level' ]
*/

//f) Return median of two sorted arrays of same size:
function getMedian(ar1, ar2, n)
{
vari = 0; 
var j = 0; 
var count;
var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
j++;
        }
    }
    return (m1 + m2)/2;
}
var ar1 = [3, 5, 7, 12, 13, 14, 21];
var ar2 = [23, 23, 23, 23, 29, 40, 56];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

/*Output:
Median is 22
*/


//g) Remove duplicates from an array
(function (rpt) {
    let arr1 = [];
    for (let i in rpt) {
      if (arr1.indexOf(rpt[i]) === -1) 
      {
        arr1.push(rpt[i]);
      }
    }
    console.log(arr1);
  })
  ([3, 5, 7, 12, 14, 14, 21, 23, 23, 23, 23]);

  /*Output:
[ 3, 5, 7, 12, 14, 21, 23 ]
*/

//h) Rotate an array by k times
let rotated = function (arr, k) {
    for (let i = 0; i< k; i++) {
  arr.unshift(arr.pop());
    }
    return arr;
  };
  console.log(rotated([1, 3, 4], 2));

  /*output
  [ 3, 4, 1 ]
  */

  