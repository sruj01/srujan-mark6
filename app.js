var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

outputDiv.innerText="srujan"

function clickHandler(){
  console.log("clicked");
    console.log("Input: ",txtInput.value);
}
btnTranslate.addEventListener("click",clickHandler);
