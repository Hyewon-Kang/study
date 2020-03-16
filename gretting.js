const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");
 //querySelector는 찾은 첫번째 것을 갖고 옴 querySelectorAll은 모든 것을 갖고 옴

//local storage : 작은 js 정보를 저장하는 것 

const USER_LS = "currentUser",
 SHOWIMG_CN = "showing";


//localStorage에 user name을 저장해줌 
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault(); //기본 동작을 없애줌 => 여기서는 엔터 누를 경우 입력된 데이터가 다른 곳으로 가면서 페이지가 새로고침 되는 것
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

//user name 물어봄
function askForName(){
    form.classList.add(SHOWIMG_CN);
    form.addEventListener("submit",handleSubmit);
}

//user name settings
function paintGreeting(text){
    form.classList.remove(SHOWIMG_CN);
    greeting.classList.add(SHOWIMG_CN);
    greeting.innerText = `Hello ${text}`;
}

//user name이 null값이면 이름을 물어보고 null값이 아니면 name setting 해줌
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();