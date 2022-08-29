let count = 0;
let counter = document.getElementById("counter")
function btnUp(){
    count = count + 1;
    counter.innerHTML = count;
    if(count < 0){
        counter.style.color = "red";
    }else if(count >0){
        counter.style.color = "green";
    }else{
        counter.style.color = "#333333";
    }
}
function btnDown(){
    count = count - 1;
    counter.innerHTML = count;
    if(count < 0){
        counter.style.color = "red"
    }else if( count >0){
        counter.style.color = "green"
    }else{
        counter.style.color = "#333333"
    }
}