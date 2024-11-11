let input=document.getElementById("task");
let text=document.querySelector(".text");


function addTask(){
    if(input.value==""){
        alert("Please Enter a Task");
    }else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click",function() {
            newEle.remove()
        });
    }
}
