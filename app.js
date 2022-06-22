var A,B,C, operator;
A = prompt("Enter a number here (0-9)");
operator = prompt ("Enter an Arithmetic Opeartor(+,-,*,/)")
B = prompt("Enter a number here (0-9)")

function Maths(){
if (operator =="+"){
 C =  Number(A) + Number(B)
}
    else if (operator =="*" ) {
        C = Number(A) * Number(B)
    } 
    else if (operator =="/" ) {
        C = Number(A) / Number(B)
    } 
    else if( operator== "-") {
        C = Number(A) - Number(B)
    }
    else if (operator = !null ){
        C =  "Error!"
    }
    else if (A = !null ){
        C = "Error!"
    }
    else if (B = !null ){
        C = "Error!"
    }

    
    else{
        
    }


return C
    
}
alert(Maths()) 
