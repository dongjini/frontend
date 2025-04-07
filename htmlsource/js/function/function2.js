// 함수 표현식
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMassage = function () {
  console.log("안녕하세요");
};
showMassage();

const multiply = function (x, y) {
  console.log(`${x}, ${y}`);
};

multiply(35, 4);

// multiply2 이름은 내부용(외부에서 호출불가)
const myFunc3 = function multiply2(x, y) {
  return x * y;
};

console.log(myFunc3(6, 8));

const rec = function f(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    f(x - 1);
  }
};

rec(5);

// 함수정의방식 비교
// multiply4 vs myFunc3
// 호이스팅(hoisting) : 선언하기 전에 사용(변수나 함수 선언이 해당 스코프의 최상단으로 끌어올려지는 것처럼 동작하는 자바스크립트의 특성)
// function name(){} / var 변수 : 호이스팅 허용
// 호이스팅 불가
// 항수표현식 / let, const
console.log(multiply4(5, 6)); // 호이스팅 허용
console.log(myFunc4(3, 9));

// y = 5;
console.log(`y = ${y}`); // 호이스팅 허용

var y = 6;

function multiply4(x, y) {
  return x * y;
}

const myFunc4 = function multiply2(x, y) {
  return x * y;
};
