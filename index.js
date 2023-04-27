const buttons = document.querySelectorAll("button");
const btnCount = document.querySelector(".buttons").childElementCount;
const exPression = document.querySelector(".expression");
const reSult = document.querySelector(".result");
const siGn = document.querySelector(".signs");

let myArray = [];
let screenState = 0;
let myFunction = "";
let expressionState = 0;
exPression.innerHTML = "";
toTal = 0;
for (button of buttons){
    button.addEventListener("click", function(){
        for(let i = 0; i < btnCount; i++){
            if(this == buttons[i]){
                try{
                    if (this.innerHTML == "="){
                        if (myArray.length == 0){

                        }
                        else{
                            expressionState = 1;
                            const expression = myArray.join("");
                            toTal = eval(expression).toFixed(2);
                            myArray = [];
                            myArray.push(toTal);
                            reSult.innerHTML = toTal;
                            siGn.innerHTML = this.innerHTML;
                            console.log(myArray);
                        }
                    }
                    else if (this.innerHTML == "-" || this.innerHTML == "+" || this.innerHTML == "*" || this.innerHTML == "/" || this.innerHTML == "." ){
                        if(screenState == 1){
                            screenState = 0;
                            siGn.innerHTML = this.innerHTML;
                            exPression.innerHTML = this.innerHTML;
                            reSult.innerHTML = "";
                            myArray.push(this.innerHTML);
                            console.log(myArray);
                        }
                        else{
                            if(expressionState == 1){
                                const expression = myArray.join("");
                                toTal = eval(expression);
                                myArray = [];
                                myArray.push(toTal);
                                myArray.push(this.innerHTML);
                                exPression.innerHTML = toTal;
                                exPression.innerHTML += this.innerHTML;
                                siGn.innerHTML = this.innerHTML;
                                expressionState = 0;
                                console.log(myArray);
                            }
                            else{
                                exPression.innerHTML += this.innerHTML;
                                myArray.push(this.innerHTML);
                                siGn.innerHTML = this.innerHTML;
                                console.log(myArray);
                            }
                        }
                    }
                    else if (this.innerHTML == '<i class="bi bi-arrow-counterclockwise"></i>'){
                        exPression.innerHTML ="";
                        reSult.innerHTML = "";
                        siGn.innerHTML = "";
                        myArray = [];
                        console.log(myArray);
                    }
                    else if (this.innerHTML == '<i class="bi bi-arrow-left-circle"></i>'){
                        if(myArray.length == 1){
                            reSult.innerHTML = "";
                            siGn.innerHTML = "";
                            myArray.pop();
                            exPression.innerHTML = myArray.join("");
                            console.log(myArray);
                        }
                        else{
                            myArray.pop();
                            exPression.innerHTML = myArray.join("");
                            console.log(myArray);
                        }
                    }
                    else if (this.innerHTML == '<i class="bi bi-info-circle"></i>'){
                        screenState = 1;
                        expressionState = 1;
                        exPression.innerHTML ="Developed by Jeffrey Lonzanida";
                        reSult.innerHTML = "v2.0";
                        siGn.innerHTML = "";
                        myArray = [];
                        console.log(myArray);
                    }
                    else{
                        if(screenState == 1){
                            screenState = 0;
                            reSult.innerHTML = "";
                            siGn.innerHTML="";
                            exPression.innerHTML = this.innerHTML;
                            myArray.push(parseFloat(this.innerHTML));
                            console.log(myArray);
                        }
                        else{
                            exPression.innerHTML += this.innerHTML;
                            myArray.push(parseFloat(this.innerHTML));
                            console.log(myArray);
                        }
                    }
                }
                catch(error){
                    screenState = 1;
                    expressionState = 0;
                    exPression.innerHTML = "Syntax Error";
                    reSult.innerHTML = "";
                    siGn.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i>`;
                    myArray = [];
                }
            }
        }
    });
}