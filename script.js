let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let backspace = document.getElementById("backspace");
let equal = document.getElementById("equal");
let pi = document.getElementById("pi");
let e = document.getElementById("e");
let sqrt = document.getElementById("sqrt");
let power = document.getElementById("power");
let clear = document.getElementById("clear");
let result = document.getElementById("result");

let write_output = function (output) {
  result.innerHTML = output;
};

let zeronum = 0.1;

var firstnum = Number(zeronum).toFixed(2);
var secondnum = 0;
var firstnummode = true;
var secondnummode = false;
var decimalmode = false;

if (firstnummode) {
  dot.onclick = function () {
    decimalmode = true;
    firstnum = firstnum * 1.0;
    write_output(firstnum + ".");
    console.log(decimalmode);
  };
  if (decimalmode == true) {
      
  } else {
    one.onclick = function () {
      firstnum = firstnum * 10 + 1;
      write_output(firstnum);
    };

    two.onclick = function () {
      firstnum = firstnum * 10 + 2;
      write_output(firstnum);
      console.log(decimalmode);
    };

    three.onclick = function () {
      firstnum = firstnum * 10 + 3;
      write_output(firstnum);
    };

    four.onclick = function () {
      firstnum = firstnum * 10 + 4;
      write_output(firstnum);
    };

    five.onclick = function () {
      firstnum = firstnum * 10 + 5;
      write_output(firstnum);
    };

    six.onclick = function () {
      firstnum = firstnum * 10 + 6;
      write_output(firstnum);
    };

    seven.onclick = function () {
      firstnum = firstnum * 10 + 7;
      write_output(firstnum);
    };

    eight.onclick = function () {
      firstnum = firstnum * 10 + 8;
      write_output(firstnum);
    };

    nine.onclick = function () {
      firstnum = firstnum * 10 + 9;
      write_output(firstnum);
    };

    zero.onclick = function () {
      firstnum = firstnum * 10;
      write_output(firstnum);
    };
  }
}

function newFunction() {
  return 0;
}
