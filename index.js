var operand1 = null;
var operand2 = null;
var operator = null;


for(var i=0; i<document.querySelectorAll(".Button").length; i++){

    document.querySelectorAll(".Button")[i].addEventListener("click", function (){
        
     var hTML = this.innerHTML;
     document.getElementById("display").innerHTML += hTML;
     calculate(hTML);
     });
}


document.addEventListener("keypress", function(event){
    document.getElementById("display").innerHTML += event.key;
    calculate(event.key);
});

function calculate (hTML){
    if(hTML=== "+"){
        operand1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = null;
        operator = "+";
     }
     
     else if(hTML==="/"){
        operand1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = null;
        operator = "/";
     }
     else if(hTML==="-"){
        operand1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = null;
        operator = "-";
     }
     else if(hTML==="^"){
        operand1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = null;
        operator = "**";
     }

     else if(hTML==="*"){
        operand1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = null;
        operator = "*";
     }

     else if (hTML==="=" || hTML==="Enter"){
        operand2 = parseFloat(document.getElementById("display").innerHTML);
        var result = eval(operand1 + "" + operator + "" + operand2);
        document.getElementById("display").innerHTML = result;
     }
     else if(hTML==="<em>C</em>"){
        document.getElementById("display").innerHTML = null;
    }
}