function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString= pin + '';
    if(pinString.length==4){
        return pin;
    }else{
        console.log("got 3");
        return getPin();
    }
}

function generatePin(){
    const pin=getPin();
    console.log(pin);
    document.getElementById("display-pin").value=pin;
}
document.getElementById("key-pad").addEventListener("click",function(event){
    const number=event.target.innerText;
    const calc = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number=='C'){
            calc.value='';
        }
        else{

        }
    } else{
    const previousCalc=calc.value;
    const newCalc= previousCalc+number;
    calc.value=newCalc;
    }
})
function verifyPin(){
    const pin=document.getElementById('display-pin').value;
    const typedNumbers= document.getElementById("typed-numbers").value;
    const successNotification = document.getElementById("notify-success");
    const failNotification = document.getElementById("notify-fail");
    

    if(pin==typedNumbers){
        
        successNotification.style.display="block";
        failNotification.style.display="none";
    }
    else{
        
        failNotification.style.display="block";
        successNotification.style.display="none";
    }
}