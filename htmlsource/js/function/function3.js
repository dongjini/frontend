// 화살표 함수
const myFunc1 = () => {};

const showMassage = () => console.log("안녕하세요");

const multiply = (x, y) => console.log(`${x}, ${y}`);

const myFunc2 = (x, y) => x * y; // 한줄이면 return 날릴 수 있음

const myFunc3 = (num) => {
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

const fruits = ["사과", "바나나", "망고", "수박", "자두", "포도"];

// fruits.forEach(function(element) {});
fruits.forEach((element) => console.log(element));
