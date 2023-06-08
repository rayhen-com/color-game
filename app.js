
// Red value function
function getRandomRed(min, max) {
    return Math.random() * (max - min) + min;
}

// Green value function
function getRandomGreen(min, max) {
    return Math.random() * (max - min) + min;
}

// Blue value functions
function getRandomBlue(min, max) {
    return Math.random() * (max - min) + min;
}

// Get "Next" Button element
const nextButton = document.getElementById('btn');

// Get "Red" Button element
const redButton = document.getElementById('red-button');

// Get "Green" Button element
const greenButton = document.getElementById('green-button');

// Get "Blue" Button element
const blueButton = document.getElementById('blue-button');

// Get Box Element
const box = document.getElementById('box');

// Get Result Element
const result = document.getElementById('result');

// Get Body Element
const bodyElement = document.getElementsByTagName('body');

// Get "Question" Element
const questionText = document.getElementById('question');

// Hide elements after guess Function
function hideElements() {
    questionText.textContent = '';
    redButton.style.display = 'none';
    greenButton.style.display = 'none';
    blueButton.style.display = 'none';
}

// Function if guess is correct
function correctGuess() {
    result.textContent = "Correct!";
    result.style.color = '#007B16';
    document.body.style.background = '#6FCB9F';
    hideElements();
};

// Function if guess is wrong
function wrongGuess() {
    result.textContent = "Wrong!";
    result.style.color = '#B70003';
    document.body.style.background = '#E69598';
    hideElements();
};

// Change box background color
nextButton.addEventListener('click', function randomColor(event) {

    // Reset state
    result.textContent = "";
    document.body.style.background = '#ffffff';
    questionText.innerHTML= "What is the main color?";
    redButton.style.display = 'block';
    greenButton.style.display = 'block';
    blueButton.style.display = 'block';

    
    // Generate rgb values
    red = getRandomRed(0, 256);
    green = getRandomGreen(0, 256);
    blue = getRandomBlue(0, 256);

    // Change background color of box
    box.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')';

    // Check if red is the dominant color
    redButton.addEventListener('click', function redClick(event) {
        if (red > blue && red > green) {
            correctGuess();
        } else {
            wrongGuess();
        }
    });

    // Check if green is the dominant color
    greenButton.addEventListener('click', function greenClick(event) {
        if (green > red && green > blue) {
            correctGuess();
        } else {
            wrongGuess();
        }
    });

    // Check if blue is the dominant color
    blueButton.addEventListener('click', function blueClick(event) {
        if (blue > red && blue > green) {
            correctGuess();
        } else {
            wrongGuess();
        }
    });
});