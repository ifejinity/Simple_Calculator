const buttons = document.querySelectorAll("button");
const btnCount = document.querySelector(".buttons").childElementCount;
const sCreen = document.querySelector(".screen");
let myArray = [];
let myFunction = "";
sCreen.value = "";
toTal = 0;
for (button of buttons){
    button.addEventListener("click", function(){
        for(let i = 0; i < btnCount; i++){
            if(this == buttons[i]){
                try{
                    if (this.innerHTML == "="){
                        const expression = myArray.join(""); // expression will be "9+9"
                        toTal = eval(expression); // total will be 18
                        sCreen.value = toTal;
                    }
                    else if (this.innerHTML == "-"){
                        sCreen.value += this.innerHTML;
                        myArray.push(this.innerHTML);
                        console.log(myArray);
                    }
                    else if (this.innerHTML == "+"){
                        sCreen.value += this.innerHTML;
                        myArray.push(this.innerHTML);
                        console.log(myArray);
                    }
                    else if (this.innerHTML == "/"){
                        sCreen.value += this.innerHTML;
                        myArray.push(this.innerHTML);
                        console.log(myArray);
                    }
                    else if (this.innerHTML == "*"){
                        sCreen.value += this.innerHTML;
                        myArray.push(this.innerHTML);
                        console.log(myArray);
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
                        sCreen.value ="Developed by Jeffrey Lonzanida using Vanilla Js, HTML5, and CCS3";
                        myArray = [];
                        console.log(myArray);
                    }
                    else if (this.innerHTML == "."){
                        sCreen.value += this.innerHTML;
                        myArray.push(this.innerHTML);
                        console.log(myArray);
                    }
                    else{
                        sCreen.value += this.innerHTML;
                        myArray.push(parseFloat(this.innerHTML));
                        console.log(myArray);
                    }
                }
                catch(error){
                    sCreen.value = error;
                    myArray = [];
                }
            }
        }
    });
}