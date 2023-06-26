var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        makesound(this.innerHTML)
        Gotclicked(this.innerHTML)

    });
}

document.addEventListener("keypress", function(event){
    makesound(event.key)
    Gotclicked(event.key)
})

function makesound(key){
    switch (key) {
        case "W":
            var audio = new Audio("./sounds/ahmed.mp3");
            audio.play();
            
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();    
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;    
            default:
            break;
    }
}



function Gotclicked(key){
    var button = document.querySelector("." + key)
    button.classList.add("pressed")
     
    setTimeout(function(){button.classList.remove("pressed")}, 200);
}