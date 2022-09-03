var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler)

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured ", error);
    alert("Something went wrong! try again later");
}

function clickHandler() {
        var inputText = txtInput.value;   // taking input

        // calling server for processing
        fetch(getTranslationURL(inputText))
        .then( response => response.json())
        .then( json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
}