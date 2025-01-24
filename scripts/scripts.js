// Global variables for accessing HTML elements
const generatorButton = document.getElementById("generator-submit-button");
const generatorResetButton = document.getElementById("generator-reset-button");
const copyButton = document.getElementById("generator-copy-button");
const generatorInput = document.getElementById("text-generator-input");
const generatorResults = document.getElementById("generator-results");

// Global variable for generated text
const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis augue massa. Fusce iaculis massa quis eros faucibus, sed tempor lectus sagittis. Morbi quis metus tempus, facilisis metus in, posuere risus. Nam tristique interdum vehicula. Donec nulla velit, pulvinar in augue at, bibendum interdum massa.";

// Function that generates text based on input
function generateChars(num) {
    const chars = dummyText;
    const charsLength = chars.length;
    let answerArr = [];
    for (let i = 0; i < num; i++) {
        answerArr.push(chars[i % charsLength]);
    }
    return answerArr.join("");
};

// Event listener to generate text when "generate" button is clicked
generatorButton.addEventListener("click", function() {
    const generatorInputValue = generatorInput.value;
    const generatedResults = generateChars(generatorInputValue);
    generatorResults.innerText = generatedResults;
});

// Resets the results paragraph
generatorResetButton.addEventListener("click", function() {
    generatorInput.value = "";
    generatorResults.innerText = "";
});

// Function to copy text ot the clipboard
copyButton.addEventListener("click", function() {
    let text = generatorResults.innerText;
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
});
