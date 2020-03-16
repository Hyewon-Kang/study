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
//계산기 
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
/*
const title = document.querySelector("#title"); //id로 찾고 싶으면 #, class로 찾고 싶으면 . 쓰기


console.log(title);

title.innerHTML="Hi From JS" //JS에서 HTML의 id가 title인 것을 ""안에 있는 내용으로 교체함
title.style.color = "red";
document.title = "i own you now";

console.dir(document);


function handResize(event){
    console.log(event); //event는 js로부터 온거임! 
}

window.addEventListener("resize", handResize); //브라우저 창 크기가 변할때마다 console 창에 log가 찍힘

function handleClick(){
    title.style.color = 'black';
}

window.addEventListener("click",handleClick);
*/

/*
//if문
if(10 === 5){ // =는 데이터 할당, ===는 데이터 체크
    console.log('hi'); //()안의 condition이 true일 때 수행
} else {
    console.log('ho'); //()안의 condition이 false일 때 수행
}

//if-else 문
if("10" === 10){
    console.log('hi');
} else if( "10" === "11"){
    console.log('lalala');
} else {
    console.log('ho');
}

if(20 > 5 && "hyewon" === "hyewon"){ //&&는 두 조건이 모두 true여야 true, ||는 두 조건 중 하나만 true여도 true
    console.log("yes");
} else {
    console.log("no");
}

*/

/*
true && true = true;
false && truen = false;
true && false = false;
false && false = false;

true || true = true
false || true = true 
true || false = true
false || false = false
*/

/*
const age = prompt("How old are you");

//console.log(age); //prompt창에 입력된 값을 console 창에 띄워줌

if( age >= 18 && age <= 21){
    console.log("you can drink but you should not");
} else if( age > 21 ){
    console.log("go ahed");
} else {
    console.log("too young");
}
*/

/*
const title = document.querySelector("#title");
const BASE_COLOR ="rgb(253, 175, 103)";
const OTHER_COLOR ="#f345ff";

function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR; 
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter",handleClick);
}

//event의 근원이 알고 싶으면 MDN을 찾아보기! 

init();

function handleOffline(){
  console.log("lalalala");
}

function handleOnline(){
  console.log("welcome back!");
}

window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS ="clicked";

function handleClick(){
  /*
  //classList에 clicked를 추가함
  const hasClass = title.classList.contains(CLICKED_CLASS);

  //만약 hasClass 목록에 없으면 추가함
  if(!hasClass){
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  */

  //이 한줄이 232~240까지의 코드를 수행해줌 
  title.classList.toggle(CLICKED_CLASS);
  
  console.log(title.classList);
}

function init(){
  title.addEventListener("click",handleClick);
}

init();