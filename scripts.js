// Write your JavaScript code here.
// Remember to pay attention to page loading!
function flightSimulate() {
    const missionAbort = document.getElementById("missionAbort");
    const button = document.getElementById("takeoff");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const status = document.getElementById("flightStatus");
    const colorShuttle = document.getElementById("shuttleBackground");
    const land = document.getElementById("landing");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocketImage = document.getElementById("rocket")
    rocketImage.style.position= 'absolute'; 
    rocketImage.style.left = '0px'; 
    rocketImage.style.bottom = '0px'; 

    button.addEventListener("click", function() {
      window.confirm("Confirm that the shuttle is ready for takeoff.");
       if (window.confirm) {
         status.innerHTML = "Shuttle in flight";
         colorShuttle.style.backgroundColor = "blue";
         shuttleHeight.innerHTML = "10000";
       }
    })

    land.addEventListener("click", function(){
        window.confirm("The shuttle is landing. Landing gear engaged.");
        if (window.confirm) {
            status.innerHTML = "The shuttle has landed.";
            colorShuttle.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            rocketImage.style.left = '0px'; 
            rocketImage.style.bottom = '0px'; 
         }
    })

    missionAbort.addEventListener("click", function(){
       window.confirm("Confirm that you want to abort the mission.");
        if (window.confirm) {
            status.innerHTML = "Mission aborted";
            colorShuttle.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            rocketImage.style.left = '0px'; 
            rocketImage.style.bottom = '0px'; 
        }
    })
    
    upButton.addEventListener("click", function() {
        if (colorShuttle.clientHeight > parseInt(rocketImage.style.bottom) + 85) {
            rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    })

    downButton.addEventListener("click", function() {
        if (parseInt(rocketImage.style.bottom) > 0) {
          rocketImage.style.bottom = parseInt(rocketImage.style.bottom) - 10 + 'px';
          shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    })

    leftButton.addEventListener("click", function() {
        if (parseInt(rocketImage.style.left) > 0) {
          rocketImage.style.left = parseInt(rocketImage.style.left) - 10 + 'px';
        }
    })

    rightButton.addEventListener("click", function() {
        if (colorShuttle.clientWidth > parseInt(rocketImage.style.left) + 85) {
            rocketImage.style.left = parseInt(rocketImage.style.left) + 10 + 'px';
        }
    })
}
window.addEventListener("load", flightSimulate);

// BONUS
// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.
// --------

//4. When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
// --------
// 3.When the "Abort Mission" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
// The flight status should change to "Mission aborted."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go to 0.
// --------
// 2.When the "Land" button is clicked, the following should happen:
// A window alert should let the user know "The shuttle is landing. Landing gear engaged."
// The flight status should change to "The shuttle has landed."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go down to 0.
// -------
// 1.When the "Take off" button is clicked, the following should happen:
//a A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//b. The flight status should change to "Shuttle in flight."
//c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//d. The shuttle height should increase by 10,000 miles.