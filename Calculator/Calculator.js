var display=document.getElementById('display');
function append(num){
    display.innerText+=num;
}

function appendOperator(operator){
    display.innerText+=`${operator}`;
}

function deleteLast(){
    display.innerText = display.innerText.slice(0, -1);;
}

function AC(){
    display.innerText='';
}

document.getElementById('ans').addEventListener('click',()=>{
    const result=eval(display.innerText);
    display.innerText=result;
});



