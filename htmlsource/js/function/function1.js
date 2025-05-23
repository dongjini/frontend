// 함수 == 자바의 메소드
// 함수 생성
function name(params) {
  // 해야할 일들
}

// 1. 매개변수가 없는 함수
function showMassage() {
  console.log("안녕하세요");
}

// 함수 호출
showMassage();

// 2. 매개변수가 있는 함수
function multiply(x, y) {
  console.log(`${x}, ${y}`);
}

multiply();
multiply(1);
multiply(1, 3);

function multiply2(x, y) {
  return x * y;
}

console.log(multiply2()); // NaN
console.log(multiply2(5, 3)); // 15
console.log(multiply2); // [Function: multiply2]

// 매개변수 기본값 y값이 안들어오면 사용
function multiply3(x, y = 3) {
  return x * y;
}
console.log(multiply3(5, 4)); // 20
console.log(multiply3(6)); // 18

function test(a, b, c, d) {
  b = b || 52; // 들어오면 b 값 쓰고 안들어오면 52 사용.
  c = c || 272;

  console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
test(1, 2, 5, 6);
test(3);

function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
  b(); // 안에서만 부를 수 있음
  c();
}
// b(); 안에 있는건 못 부름
// c();
a();
