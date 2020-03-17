const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//let은 값이 변할 수 있고(변수) const는 값이 변할 수 없음(상수)
let toDos = [];


function deleteToDo(event){
    //.target.parentNodes를 하면 클릭된 버튼이 속한 li(부모)의 id를 가져옴
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    //filter는 체크 된 Item들의 array를 주는 역할을 함
    const cleanToDos = toDos.filter(function(toDo){
        /*
        parseInt는 li.id를 int로 바꿔줌
        ↓모든 toDos가 li의 id와 같지 않을 경우
        */
        return toDo.id !== parseInt(li.id);
    });

    //li가 삭제된 cleanToDos를 기존 toDos에 넣어줌 => 삭제된 데이터 업데이트 
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); 
    /*
    localStorage에는 JS Data를 저장할 수 없음. 오로지 String만 저장 가능!
    그래서 Object를 String으로 만들어서 저장해줘야함!
    Object -> String으로 바꿔주는게 바로 JSON.stringify();
    JSON => JavaScript Object Notation 의 줄임말
    */
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    
    delBtn.innerHTML = "×";
    delBtn.addEventListener("click",deleteToDo);
    delBtn.id = "delBtn"

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value= "";
}

/*
function something(toDo){
    console.log(toDo.text);
}
*/

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //String -> Object로 바꿔줌
        //parsedToDos.forEach(something); 처럼 function을 밖에 만들어서 사용해도 됨
        
        //forEach는 array를 위한 function임 각각의 item과 실행됨
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();