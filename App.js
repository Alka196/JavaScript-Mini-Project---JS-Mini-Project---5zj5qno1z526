
var character = document.getElementById("character");

var block = document.getElementById("block");

function jump() {

    if (character.classList != "animate") {

        character.classList.add("animate");

    }

    setTimeout(function () {

        character.classList.remove("animate");

    }, 500)

}

var check = setInterval(function () {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockleft < 20 && blockleft > 0 && characterTop >= 120) {

        block.style.animation = "none";

        block.style.animation = "display";

        alert("You Lose");

        location.reload();

    }

}, 10);

function start() {

    block.style.animation = "block 1.5s infinite linear";

}