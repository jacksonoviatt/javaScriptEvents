
let flower = document.getElementById('flower');
function stemGrow(eventdetails) {
    let flowerStem = document.getElementById('flowerStem');
    console.log(eventdetails);
    flowerStem.style.height = "500px";
    flower.removeEventListener("mouseover", stemGrow);
}

flower.addEventListener("mouseover", stemGrow);


function sunset(eventdetails){
    if (eventdetails.keyCode === 32) {
    console.log(eventdetails);
    document.body.style.backgroundImage = "linear-gradient(skyblue, pink, #ff9b54, #ff7f51, #ce4257)"
    }
}

document.body.addEventListener("keydown", sunset);

function spinningFlower(eventdetails) {
    console.log(eventdetails);
    flower.querySelector('img').style.transform += "rotate(360deg)";
}


flower.addEventListener("click", spinningFlower);


