let count = 0;
const value = document.querySelector(".value");
let btns = document.querySelectorAll(".btn");
btns.forEach(function (btn){
    btn.addEventListener("click",(e)=>{
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;
        }else if(style.contains("reset")){
            count = 0;
        }else{
            count++;
        }
        value.textContent = count;
    })
})