


let counter= 0;

document.getElementById("IncreaseBtn").onclick = function (){
    counter++;
    document.getElementById("CounterLabel").textContent = counter;
    document.getElementById("Screen").style.backgroundColor = "Green";
}
document.getElementById("DecreaseBtn").onclick = function(){
    counter--;
    document.getElementById("CounterLabel").textContent = counter;
    document.getElementById("Screen").style.backgroundColor = "Red";
}

document.getElementById("ResetBtn").onclick = function (){
    counter = 0;
    document.getElementById("CounterLabel").textContent = counter;
    document.getElementById("Screen").style.backgroundColor = "hwb(182 0% 22%";
}