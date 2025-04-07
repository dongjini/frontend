// 1.함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function f(x, y) {
  return x + y;
}
console.log("3 + 5 = " + f(3, 5));

// 2.함수표현식으로 1번 변경
const add1 = function (x, y) {
  return x + y;
};
console.log("3 + 5 = " + f(3, 5));

// 3. 1 ~ 10 까지 더하는 작업을 함수 표현식으로 작성
let sum = 0;
const add2 = function () {
  for (let i = 0; i < 11; i++) {
    sum += i;
  }
  return sum;
};
console.log("1 ~ 10 합 = " + add2());

// 4. 숫자를 인자로 받아서 3의 배수를 찾기
// 3의 배수라면 박수 출력, 아니라면 통과
const myFunc1 = function (num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
myFunc1(4);
myFunc1(3);

// 5. 4번 개선
// 4번 + 9의 배수인 경우 박수 *2 출력
const myFunc2 = function (num) {
  if (num % 3 == 0) {
    if (num % 9 !== 0) {
      console.log("박수");
    } else {
      console.log("박수 박수");
    }
  } else {
    console.log("통과");
  }
};
myFunc2(3);
myFunc2(6);
myFunc2(9);

// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
//  과목은 2개, 두 과목 합해서 120점 이상이면 합격
//  한 과목이 40점 미만이면 과락으로 불합격
function pass(outline, law) {
  const score = outline + law;

  if (outline >= 40 && law >= 40 && score >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
pass(40, 80);
pass(30, 90);
