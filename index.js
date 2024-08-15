// Function to play sound based on the key pressed
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key);
    }
}

// Adding event listeners to drum buttons for click events using a loop
var buttonNo = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonNo; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonpress(buttonInnerHTML);
    });
}

// Adding event listener for keyboard key press events
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonpress(event.key);
});
function buttonpress(key){
            var active=document.querySelector("."+key);
            active.classList.add("pressed");
            setTimeout(function() {
                active.classList.remove("pressed");
            }, 100);


    }



  