
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
const box = document.getElementById('box')

result = document.getElementById('result')

// Change box background color
nextButton.addEventListener('click', function randomColor(event) {

    // Reset state
    result.innerHTML = ""
    redButton.disabled = false
    greenButton.disabled = false
    blueButton.disabled = false
    
    // Generate rgb values
    red = getRandomRed(0, 256)
    green = getRandomGreen(0, 256)
    blue = getRandomBlue(0, 256)

    // Change background color of box
    box.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')'

    // Check if red is the dominant color
    redButton.addEventListener('click', function redClick(event) {
        if (red > blue && red > green) {
            result.innerHTML = "Correct!"
            redButton.disabled = true
            greenButton.disabled = true
            blueButton.disabled = true
            result.style.color = '#007B16'
        } else {
            result.innerHTML = "Wrong"
            redButton.disabled = true
            greenButton.disabled = true
            blueButton.disabled = true
            result.style.color = '#B70003'
        }
    });

    // Check if green is the dominant color
    greenButton.addEventListener('click', function greenClick(event) {
        if (green > red && green > blue) {
            result.innerHTML = "Correct!"
            redButton.disabled = true
            greenButton.disabled = true
            blueButton.disabled = true
            result.style.color = '#007B16'
        } else {
            result.innerHTML = "Wrong"
            redButton.disabled = true
            greenButton.disabled = true
            blueButton.disabled = true
            result.style.color = '#B70003'
        }
    });

    // Check if blue is the dominant color
    blueButton.addEventListener('click', function blueClick(event) {
        if (blue > red && blue > green) {
            result.innerHTML = "Correct!"
            redButton.disabled = true
            greenButton.disabled = true
            blueButton.disabled = true
            result.style.color = '#007B16'
        } else {
            result.innerHTML = "Wrong"
            redButton.disabled = true
            greenButton.disabled = true
            blueButton.disabled = true
            result.style.color = '#B70003'

        }
    });

});