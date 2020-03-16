/*String
const what = "Nicolas";

boolean (true or false)
const wat = true; //true = 1, false = 0으로 ture false는 String이 아님

//Number
const wat = 666;

//Float
const wat = 55.1;
*/

/*
Array 사용
Array는 다른 타입의 데이터도 들어갈 수 있음!
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon, tue, wed, thu, fri);

const something = "Something";
const dayOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun", 54, true, "stuff", something];

console.log(dayOfWeek);

//세번째 칸에 들어있는 내용을 알고 싶을 때 사용
console.log(dayOfWeek[2]);
//object는 array처럼 동작하지 않음. object는 실제 객체를 만들어줌 
//object는 array안에 넣을 수 있음
*/
/*
const hyewonInfo = {
  name:"Hyewon",
  age:24,
  gender:"Female",
  isHandsome:true,
  favMovies : ["Along the gods", "LOTR", "Oldboy"],
  favFood :[
      {
        name:"Kimchi",
        fatty:false
      },
      {
      name:"Cheese burger",
      fatty:false
      }
    ]
}
/*
console.log(hyewonInfo);
//원하는 정보만 갖고 올 때
console.log(hyewonInfo.gender);

//특정 정보만 수정할 때 
hyewonInfo.gender = "Male";

console.log(hyewonInfo.gender);

//js가 말썽이어도 html과 css는 멀쩡함

console.log(hyewonInfo, console);

*/
/*
function sayHello(name, number){
  console.log(`Hello ${name} you are ${number} years old`);
}

const greetHyewon = sayHello("Hyewon",14);
console.log(greetHyewon); // greetHyewon의 값은 sayHello 함수의 리턴값임. undefined라고 뜨는 이유는 sayHello 함수의 return 값이 없기 때문
*/

/*
function sayHello(name, number){
  return `Hello ${name} you are ${number} years old`;
}
const greetHyewon = sayHello("Hyewon",24);
console.log(greetHyewon);
*/

/*
const calculator = {
  plus : function(a, b){
    return a + b;
  },
  minus : function(a, b){
    return a - b;
  },
  multiply : function(a, b){
    return a * b;
  },
  division : function(a, b){
    return a / b;
  },
  pow : function(a, b){
    return a ** b;
  }
}

const plus = calculator.plus(5, 5);
const min = calculator.minus(6, 1);
const mul = calculator.multiply(5, 5);
const div = calculator.division(10, 2);
const pow = calculator.pow(2, 3);
console.log(plus, min, mul, div, pow);
*/

//const title = document.getElementById("title");

const title = document.querySelector("#title"); //id로 찾고 싶으면 #, class로 찾고 싶으면 . 쓰기
console.log(title);

title.innerHTML="Hi From JS" //JS에서 HTML의 id가 title인 것을 ""안에 있는 내용으로 교체함
title.style.color = "red";
document.title = "i own you now";


console.dir(document);