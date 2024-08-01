let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let specialchar = ["%","/","*","+","+","="];
let output = "";

let calculation = (btnvalue)=>{
    if(btnvalue == "=" && output !== ""){
        output = eval(output.replace("%","/100"));
    }
    else if(btnvalue == "AC"){
        output="";
    }
    else if(btnvalue == "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(btnvalue == "" && specialchar.includes(btnvalue)) return;
        output+=btnvalue
    }
    display.value = output;
}

buttons.forEach((items)=>{
    items.addEventListener("click",(e)=>{calculation(e.target.dataset.value)})
})