// Set the element that holds the flower to a global variable
let flower = document.getElementById('flower');

// This function will increase the height of the div that is the flower stem 
// and it also remove hte event listener after it is called
function stemGrow(eventdetails) {
    let flowerStem = document.getElementById('flowerStem');
    console.log(eventdetails);
    flowerStem.style.height = "350px";
    flower.removeEventListener("mouseover", stemGrow);
}

// Here I used event listener to call the stem grow function so the stem willl grow in height 
// when the mouse enters the flower container the 
flower.addEventListener("mouseover", stemGrow);

// This function will set the background of the page 
// if the key pressed at event listener matches the key code in  the
// conditional statement

function sunset(eventdetails){
    if (eventdetails.keyCode === 32) {
        // Space Bar
    console.log(eventdetails);
    document.body.style.backgroundImage = "linear-gradient(#ff9b54, #ff7f51, #ce4257)";
    } else if (eventdetails.keyCode === 13) {
        // return
        console.log(eventdetails);
        document.body.style.backgroundImage = "linear-gradient(navy, purple)"
    } else if (eventdetails.keyCode === 8) {
        // delete
        console.log(eventdetails);
        document.body.style.backgroundImage = "linear-gradient(skyblue, slateblue)";
    }
}

// call on the sunset function when the specified keys are pressed
document.body.addEventListener("keydown", sunset);


// a function that will rotate the image in a full circle when called
function spinningFlower(eventdetails) {
    console.log(eventdetails);
    flower.querySelector('img').style.transform = "rotate(360deg)";
}

// call on the spinning flower function when the flower image is clicked
flower.querySelector('img').addEventListener("click", spinningFlower);


// set rain as global variable for the rain drops
let rain = document.getElementById('raindrops');

// The position of the rain drop div will change and they will transition down the page
// this function can only run once
function itsRaining(eventdetails) {
    console.log(eventdetails);
    rain.style.bottom = "40px";   
    flower.querySelector('div').removeEventListener("scroll", itsRaining);
}

// Call on the itsRaining function when the user scrolls the flower stem
flower.querySelector('div').addEventListener("scroll", itsRaining);

