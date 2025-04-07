// 조건문
// true : true 자료들, 0 제외 숫자,'문자', {}, []
// false : false 자료들, 0, '', null, undefined, NaN

const date = new Date();
console.log(date); // 2025-04-07T01:07:55.012Z (ISO 8601 표준표현방법)
const hour = date.getHours();

if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

// NaN (Not a Number) : 숫자가 아니면 true
console.log("\n=== isNaN()");
console.log(isNaN("12"));
console.log(isNaN("abc"));

// "12" ==> 12
// Number() : 문자숫자 --> 숫자
console.log("\n=== Number()");
const num1 = Number("23");
console.log("type", typeof num1);
console.log(Number("abc"));
console.log("78.45", Number(78.45));
console.log("Numver('78 45 55')", Number("78 45 55"));

// parseInt() : 문자숫자 --> 숫자
const num2 = parseInt("33");
console.log(typeof num2);
console.log(parseInt("abc"));
console.log("\n=== parseInt()");
console.log("78.45", parseInt(78.45));
console.log("parseInt('78 45 55')", parseInt("78 45 55")); // 78

if (isNaN(Number("123"))) {
  console.log("문자");
} else {
  console.log("숫자");
}

// switch
console.log("\n=== switch");
let day = "";
switch (date.getDay()) {
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
  case 6:
    day = "Saturday";
    break;
}
console.log("Today is " + day);
