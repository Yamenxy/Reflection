let angleOfIncidence = 0;
let angleOfReflection = 0;
let angleOfReflection_2 = 0;
let maxReflections = 5; // Maximum number of reflections
let reflectionCount = 0; // Current reflection count
let delayDurationForSecondRay = 2000; // Delay duration in milliseconds (2 seconds)
let delayDurationForFirstRay = 1000; // Delay duration in milliseconds (1 second)

let lightX, lightY, lightZ; // Starting position of the first ray
let lightX_2, lightY_2, lightZ_2; // Starting position of the second ray

let buttonPressed = false; // Flag to track if the button is pressed

function setup() {
  createCanvas(900, 900);

  // Add event listener to the "OK" button
  document.getElementById('okButton').addEventListener('click', function() {
    buttonPressed = true;
    executeCode();
  });
}
function draw() {
  background(255);

  // Draw the reflecting surface (mirror)
  stroke(0, 0, 0);
  line(0, height / 2, width, height / 2);

  strokeWeight(4); // Increase the stroke weight for a thicker line

  lightX = width / 2;
  lightY = height / 2;
  lightZ = width / 2;

  lightX_2 = width / 2;
  lightY_2 = height / 2;
  lightZ_2 = width / 2;

  if (angleOfIncidence <= 90) {
    // Draw the first ray
    angleOfReflection = 90 - angleOfIncidence;
    let reflectionX = lightX + cos(radians(angleOfReflection)) * height;
    let reflectionY = lightY - sin(radians(angleOfReflection)) * height;
    let reflectionZ = lightZ + cos(radians(angleOfReflection)) * height;

    stroke(0, 0, 0);
    line(lightX, lightY, lightX, 0);
    stroke(900, 0, 0);
    line(lightZ, lightY, reflectionZ, reflectionY);

    lightX = reflectionX;
    lightY = reflectionY;
    lightZ = reflectionZ;
  }

  if (angleOfIncidence > 90) {
    angleOfReflection = "NAN";
    angleOfIncidence = "NAN";
  }

  if (angleOfIncidence <= 180) {
    // Draw the second ray
    angleOfReflection_2 = 90 + angleOfIncidence;
    let reflectionX_2 = lightX_2 + cos(radians(angleOfReflection_2)) * height;
    let reflectionY_2 = lightY_2 - sin(radians(angleOfReflection_2)) * height;
    let reflectionZ_2 = lightZ_2 + cos(radians(angleOfReflection_2)) * height;

    stroke(0, 700, 0);
    line(lightX_2, lightY_2, lightX_2, 0);
    stroke(900, 0, 0);
    line(lightZ_2, lightY_2, reflectionZ_2, reflectionY_2);

    lightX_2 = reflectionX_2;
    lightY_2 = reflectionY_2;
    lightZ_2 = reflectionZ_2;
  }

  // Call the displayText function
  displayText();
}
function executeCode() {
  // Update the angle of incidence and reflection based on user input
  angleOfIncidence = parseFloat(document.getElementById('angleInput').value);
  angleOfReflection = parseFloat(document.getElementById('angleInput').value);

  // Reset the reflection count
  reflectionCount = 0;
}

// Function to display the text
function displayText() {
  fill(255);
  textSize(15);
  text(`زاوية السقوط: ${angleOfIncidence}°`, 10, 30);
  text(`زاوية الانعكاس: ${angleOfIncidence}°`, 10, 60);
  text(`الزاويه التي يصنعها الشعاع مع المرأه: ${angleOfReflection}°`, 10, 90);
}

// Call the setup function to initialize the canvas and event listener
setup();
