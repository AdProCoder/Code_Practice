// Selecting All Tags In Html For JavaScript Word
let time = document.querySelector("#time");
let counter = document.querySelector("#counter");
let start = document.querySelector("#start");

let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");

let typingText = document.querySelector("#typingText");
let userInput = document.querySelector("#userInput");

//Variables For CountDown
let timer = 0;
let interval = null;

//Variables To Store Errors , Words & Characters
let errorCounter = 0;
let wordsCounter = "";
let index = 0;

// Words For Speed Test
let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;


// disabled '#UserInput'
userInput.disabled = true;

// Start `Typing Speed Test` Game
start.addEventListener("click" , ()=>{
    start.innerText = `Start Typing`;    //Change Text On Click
    userInput.disabled = false;    //enabled '#UserInput

    // Appending Spans
    text.split("").forEach(characters =>{
        let spanTxt = document.createElement("span");
        spanTxt.innerText = characters;
        typingText.appendChild(spanTxt);
    })

    //start CountDown
    interval = setInterval(countDown , 1000);
    time.style.display = "grid";
    result.style.display = "none";
    start.style.pointerEvents = "none";
});

//CountDown Function
let countDown = ()=>{
    if(timer < 60){
        timer++;
        counter.innerText = timer;
    }
    else
    {
        userInput.disabled = true;    // disabled '#UserInput'
        time.style.display = "none";
        result.style.display = "flex";  //Display Result 

        wordsCounter = userInput.value;
        characters.innerText = index;    //total Characters
        words.innerText = wordsCounter.split(" ").length;    //total Words
        error.innerText = errorCounter;    //total errors

        //Stop Timer
        clearInterval(interval);
        timer = 0;    //reset Timer
    }
}

//match Characters
userInput.addEventListener("input" , e =>{
let userValue = userInput.value.split("");
// console.log(userValue);

let randomText = typingText.querySelectorAll("span");
// console.log(randomText);

//if user key will be equal to `backspace` so
if(e.inputType === "deleteContentBackward"){
    index--;
    randomText[index].classList.remove("correct");
    randomText[index].classList.remove("incorrect");
}
//if user Key Matched So
else if(userValue[index] === randomText[index].innerText){
    randomText[index].classList.add("correct");
    index++;
}
// if user key not matched so
else
{
    {
    randomText[index].classList.add("incorrect");
    index++;
    errorCounter++;
}
}
});
