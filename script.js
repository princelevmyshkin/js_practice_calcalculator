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
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let result = document.getElementById("result");

let write_output = function (output) {
  result.innerHTML = output;
};

let first_num = 0;
let second_num = 0;
let answer = 0;
let operation;
let first_num_mode = true;
let second_num_mode = false;

one.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 1;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 1;
    write_output(second_num);
  }
};

two.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 2;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 2;
    write_output(second_num);
  }
};

three.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 3;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 3;
    write_output(second_num);
  }
};

four.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 4;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 4;
    write_output(second_num);
  }
};

five.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 5;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 5;
    write_output(second_num);
  }
};

six.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 6;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 6;
    write_output(second_num);
  }
};

seven.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 7;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 7;
    write_output(second_num);
  }
};

eight.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 8;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 8;
    write_output(second_num);
  }
};

nine.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 9;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 9;
    write_output(second_num);
  }
};

zero.onclick = function () {
  if (first_num_mode) {
    first_num = first_num * 10 + 0;
    write_output(first_num);
  } else {
    second_num = second_num * 10 + 0;
    write_output(second_num);
  }
};
clear.onclick = function () {
  first_num = 0;
  second_num = 0;
  first_num_mode = true;
  second_num_mode = false;
  answer = 0;
  write_output(first_num);
};

equal.onclick = function () {
  if (operation == "p") {
    answer = first_num + second_num;
    write_output(answer);
    first_num = answer;
    second_num = 0;
  } else if (operation == "mi") {
    answer = first_num - second_num;
    write_output(answer);
    first_num = answer;
    second_num = 0;
  } else if (operation == "mu") {
    answer = first_num * second_num;
    write_output(answer);
    first_num = answer;
    second_num = 0;
  } else if (operation == "d") {
    answer = first_num / second_num;
    write_output(answer);
    first_num = answer;
    second_num = 0;
  }
};

plus.onclick = function () {
  first_num_mode = false;
  second_num_mode = true;
  operation = "p";
  write_output("+");
};

minus.onclick = function () {
  first_num_mode = false;
  second_num_mode = true;
  operation = "mi";
  write_output("-");
};

multiply.onclick = function () {
  first_num_mode = false;
  second_num_mode = true;
  operation = "mu";
  write_output("*");
};

divide.onclick = function () {
  first_num_mode = false;
  second_num_mode = true;
  operation = "d";
  write_output("/");
};
