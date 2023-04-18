const buttons = document.querySelectorAll("button");
const btnCount = document.querySelector(".buttons").childElementCount;
const sCreen = document.querySelector(".screen");
let myArray = [];
let screenState = 0;
let myFunction = "";
sCreen.value = "";
toTal = 0;
for (button of buttons){
    button.addEventListener("click", function(){
        for(let i = 0; i < btnCount; i++){
            if(this == buttons[i]){
                try{
                    if (this.innerHTML == "="){
                        const expression = myArray.join("");
                        toTal = eval(expression);
                        myArray = [];
                        myArray.push(toTal);
                        sCreen.value = toTal;
                        console.log(myArray);
                    }
                    else if (this.innerHTML == "-" || this.innerHTML == "+" || this.innerHTML == "*" || this.innerHTML == "/" || this.innerHTML == "." ){
                        if(screenState == 1){
                            screenState = 0;
                            sCreen.value = this.innerHTML;
                            myArray.push(this.innerHTML);
                            console.log(myArray);
                        }
                        else{
                            sCreen.value += this.innerHTML;
                            myArray.push(this.innerHTML);
                            console.log(myArray);
                        }
                    }
                    else if (this.innerHTML == '<i class="bi bi-arrow-clockwise"></i>'){
                        sCreen.value ="";
                        myArray = [];
                        console.log(myArray);
                    }
                    else if (this.innerHTML == '<i class="bi bi-arrow-left-circle"></i>'){
                        myArray.pop();
                        sCreen.value = myArray.join("");
                        console.log(myArray);
                    }
                    else if (this.innerHTML == '<i class="bi bi-info-circle"></i>'){
                        screenState = 1;
                        sCreen.value ="Developed by Jeffrey Lonzanida using Vanilla Js, HTML5, and CCS3";
                        myArray = [];
                        console.log(myArray);
                    }
                    else{
                        if(screenState == 1){
                            screenState = 0;
                            sCreen.value = this.innerHTML;
                            myArray.push(parseFloat(this.innerHTML));
                            console.log(myArray);
                        }
                        else{
                            sCreen.value += this.innerHTML;
                            myArray.push(parseFloat(this.innerHTML));
                            console.log(myArray);
                        }
                    }
                }
                catch(error){
                    screenState = 1;
                    sCreen.value = error;
                    myArray = [];
                }
            }
        }
    });
}