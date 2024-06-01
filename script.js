let inputBar = document.querySelector("input");
let addBtn = document.querySelector(".btn");
let taskContainer = document.querySelector(".cont");
let taskArray = [];

let getTaskArrayString  = localStorage.getItem("taskArray");

if(getTaskArrayString){
    let getTaskArray = JSON.parse(getTaskArrayString);

    taskArray = [...getTaskArray]
    
   taskArray.forEach(function(obj){
        taskMaker(obj)
    })
}

addBtn.addEventListener("click", () => {
    let taskText = inputBar.value ;

    inputBar.value = "";

    if(taskText.length == 0 ) return ;

    let taskObj = {task : taskText , id : Date.now()}

    taskArray.push(taskObj);
    localStorage.setItem("taskArray" ,JSON.stringify(taskArray) )
    // console.log(taskArray)
    taskContainer.innerHTML = ""
    taskArray.forEach(obj=>{
        taskMaker(obj)
    })

   
})


function taskMaker(obj){

    let task = obj.task ;
    let id = obj.id ;

    let taskEle = document.createElement("div");

    taskEle.classList.add("task-cont");
 
    taskEle.innerHTML = ` <p> ${task}  </p>
    <svg id="deleteBtn" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z"></path></svg>`
 
    let delteBtn = taskEle.querySelector('#deleteBtn');
 
    delteBtn.addEventListener("click",()=>{
         taskContainer.removeChild(taskEle); // removing child from UI 
         // remove child from task array // then update it in local storage 

         taskArray = taskArray.filter(obj=>obj.id !=id );

         localStorage.setItem("taskArray" ,JSON.stringify(taskArray) ) // updating the local storgae 
    })
 
    taskContainer.appendChild(taskEle);
}




// let array = ["task1" , "task2"]
//localStorage.setItem("taskArray", JSON.stringify(array))\


// let data = localStorage.getItem("taskArray")

// console.log(JSON.parse(data));