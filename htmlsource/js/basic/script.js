// "use strict "
// alert("test")
/* 
    줄바꿈이 있다면 세미클론 생략 가능


    자바스크립트 변수
    타입없음
    let, const (요즘 방식) / var (예전방식)
    let : 변수 선언 / const : 상수선언  / var : 유연한 변수선언방식

 */
let a =3;
console.log(typeof a); // number
console.log(a);
a = "test"; // 문자열 : '', "" 
console.log(typeof a); // string
console.log(a);

// Cannot redeclare block-scoped variable 'a'.
// const : 상수선언
const b = 15; 
console.log(b);
// b =  20;
// console.log(b); // TypeError: Assignment to constant(상수) variable.


{
    let a = 333;
    console.log('block-scope', a)
}


// 변수 범위
// var : function scope
// let, const : block-scoped
function foobar(){
    var foo = 5;
    console.log(foo);
}
// console.log(foo); ReferenceError: foo is not defined
            
if(true) {
    var aa =5;
    console.log(aa);
}
console.log(aa);

if(true) {
    let bb =5;
    console.log("let block scope",bb);
}
// console.log("let block scope",bb); ReferenceError: bb is not defined
