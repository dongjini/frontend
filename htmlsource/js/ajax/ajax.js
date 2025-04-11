// console.log("시작")
// setTimeout(() => {
//     console.log("중간")

// }, 3000);
// console.log("마무리")

// fetch
// fetch("서버주소")
// .then("응답도착" => 적절한 타입으로 변환 후 리턴 )
// .then("도착한 응답 처리");

// https://jsonplaceholder.typicode.com/todos/1 서버로 요청
console.log("시작");
fetch("https://jsonplaceholder.typicode.com/todos/1") // 요청들어감.
  .then((res) => res.json())
  .then((data) => console.log(data)); // 비동기식이라 나중에 들어옴
console.log("마무리");
