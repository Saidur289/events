function handlerClick(){
    const status = document.getElementById("handler-status");
    status.innerText = 'handle by function ';
}
// Option - 2 
document.getElementById('events').addEventListener("click", function(){
    const status = document.getElementById("handler-status");
    status.innerText = 'change by event lisiner';
})
// Option-2 recap 
document.getElementById("btn1").addEventListener("click", function(){
    let inputField = document.getElementById('input-text');
    let text = inputField.value;
    let p = document.getElementById("para");
    p.innerText = text;
    inputField.value = "";
})