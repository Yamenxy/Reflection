let angleOfIncidence = 0;
    let angleOfReflection = 0;
    let angleOfReflection_2 = 0;
    let maxReflections = 5; // Maximum number of reflections
    let reflectionCount = 90; // Current reflection count

    function setup() {
      createCanvas(900, 900);
    }

    function draw() {
      background(220);

      // Draw the reflecting surface (mirror)
      stroke(0,0, 0);
      line(0, height / 2, width, height / 2);

      strokeWeight(2);

      // Initialize the starting position of the light ray
      let lightX = width / 2;
      let lightY = height / 2;
      let lightZ = width / 2;

      let lightX_2 = width / 2;
      let lightY_2 = height / 2;
      let lightZ_2 = width / 2;

      if (angleOfIncidence <= 90) {
        // Perform multiple reflections
        for (let i = 0; i < maxReflections; i++) {
          // Calculate the angle of reflection
          angleOfReflection = 90 - angleOfIncidence;

          angleOfReflection_2 = 90 + angleOfIncidence;

          // Calculate the endpoint of the reflected ray
          let reflectionX = lightX + cos(radians(angleOfReflection)) * height;
          let reflectionY = lightY - sin(radians(angleOfReflection)) * height;
          let reflectionZ = lightZ + cos(radians(angleOfReflection)) * height;


          let reflectionX_2 = lightX_2 + cos(radians(angleOfReflection_2)) * height;
          let reflectionY_2 = lightY_2 - sin(radians(angleOfReflection_2)) * height;
          let reflectionZ_2 = lightZ_2 + cos(radians(angleOfReflection_2)) * height;


          // Draw the incident ray (light shining on the mirror)
          stroke(0, 700, 0);
          line(lightX, lightY, lightX, 0);
          
          // stroke(0, 0, 500);
          // line(lightZ, lightY, lightZ, -1);
          
          // Draw the reflected ray
          stroke(900, 0, 0);
          // line(lightX, reflectionX, reflectionY);

          line(lightZ, lightY, reflectionZ, reflectionY);

          stroke(900, 0, 0);
          line(lightZ_2, lightY_2, reflectionZ_2, reflectionY_2);

          // Draw the normal line
          // stroke(0, 0, 255);
          // line(reflectionX, reflectionY, reflectionX - 100, reflectionY);

          // Draw the reflection ray
          // line(reflectionX, reflectionY, reflectionX, 0);

          // line( reflectionX, reflectionY, 100, reflectionX);

          // Update the starting position for the next reflection
          lightX = reflectionX;
          lightY = reflectionY;
          lightZ = reflectionZ;

          lightX_2 = reflectionX_2;
          lightY_2 = reflectionY_2;
          lightZ_2 = reflectionZ_2;          

          // Exit the loop if the maximum number of reflections is reached
          if (reflectionCount >= maxReflections) {
            break;
          }
        }
      }
      
      // Display the angles
      fill(0);
      textSize(15);
      text(`زاويه السقوط: ${angleOfIncidence}°`, 10, 30);
      text(`زاويه الانعكاس: ${angleOfIncidence}°`, 10, 60);
      text(`الزاويه التي يصنعها الشعاع مع المرأه: ${reflectionCount}°`, 10, 90);
    }

    function updateAngle() {
      angleOfIncidence = parseFloat(document.getElementById('angleInput').value);
  let inputValue = document.getElementById('angleInput').value;
  if (inputValue === '') {
    reflectionCount = 'NaN';
  }
  else if(inputValue > 180)
  {
    angleOfIncidence = 'NaN'
    reflectionCount = 'NaN';
  }  else {
    angleOfIncidence = parseFloat(inputValue);
    if (angleOfIncidence <= 90) {
      reflectionCount = 90 - angleOfIncidence; // Reset the reflection count
    } else if (angleOfIncidence > 90) {
      angleOfIncidence = (90 - angleOfIncidence) * -1;
      reflectionCount = 90 - angleOfIncidence;
    }
  }
}

    document.getElementById('angleInput').addEventListener('input', updateAngle);
  