  //a) Print odd numbers in an array

  const odd = (arr) => {
    let arr1 = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  };
  console.log(odd([2,4,9,7,10,22,17]));

  /*output
  [ 9, 7, 17 ]
  */

  //b) Convert all the strings to title caps in a string array
  const capital1 = (str) => {
    vararr = str.split(" ");
      console.log(arr);
    var res = [];
      for (vari in arr) {
    res.push((arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)));
      }
      return res.join(" ");
    };
    console.log(capital1("my name is kapilesh."));    

    /* output
    [ 'my', 'name', 'is', 'kapilesh.' ]

My Name Is kapilesh
*/

//c) Sum of all numbers in an array
var total = (arr) => {
    var sum = 0;
      for (vari in arr) {
        sum += arr[i];
      }
      console.log(sum);
    };
    total([2, 3, 10]);

/*output
12
*/
//d) Return all the prime numbers in an array
var prime = (arr) => {
    return arr.filter((num) => {
      for (vari = 2; i<num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num> 1;
    });
  };
  console.log(prime([1, 2, 3, 12, 25, 37, 99]));

  /*Output:
[ 2, 3, 37 ]
*/

//e) Return all the palindromes in an array
var palndrm = (arr) => {
    var arr1 = [];
      for (vari in arr) {
        if (arr[i].split("").reverse().join("") === arr[i]) {
          arr1.push(arr[i]);
        }
      }
      return arr1;
    };
    console.log(palndrm(['amma', 'racecar', 'apple', 'porcupine', 'appa','live', 'level']));

    /*Output:
[ 'amma', 'racecar', 'appa', 'level' ]
*/

