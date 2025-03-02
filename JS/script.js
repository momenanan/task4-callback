const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

function activateLight(light, duration) {
  // Set opacity for inactive lights
  redLight.style.opacity = 0.3;
  yellowLight.style.opacity = 0.3;
  greenLight.style.opacity = 0.3;
  light.style.opacity = 1;
}

function startTrafficLight(){
    setTimeout(()=>{
        activateLight(redLight);
        setTimeout(()=>{
            activateLight(yellowLight);
            setTimeout(()=>{
                activateLight(greenLight);
                startTrafficLight();
            },1000)
        },1000)
    },1000)
}


startTrafficLight();