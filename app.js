var btnTranslate= document.querySelector("#btn-translate")
var txtInput= document.querySelector("#txt-input")
var outputDiv= document.querySelector("#output")

//(This is the mock server URL that sir made for practice)https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
  return serverURL + "?" + "text=" + text
}

function errorHandler(error){
  console.log("encountered error: ",error)
  alert("Server seems to be experiencing issues, try again later")
}

function clickHandler(){
  var inputTxt = txtInput.value//taking input

  fetch(getTranslationURL(inputTxt))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated
    outputDiv.innerText = translatedText
  })
  //.catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)
