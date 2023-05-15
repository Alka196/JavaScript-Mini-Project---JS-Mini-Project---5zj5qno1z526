var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var highestScore = localStorage.getItem("highestScore") || 0;

function updateScore() {
    score++;
    document.getElementById("scoreValue").textContent = score;
}

function updateHighestScore() {
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem("highestScore", highestScore);
        document.getElementById("highestScoreValue").textContent = highestScore;
    }
}

function resetScore() {
    score = 0;
    document.getElementById("scoreValue").textContent = score;
}

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var check = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockleft < 20 && blockleft > 0 && characterTop >= 120) {
        block.style.animation = "none";
        block.style.animation = "display";
        alert("You Lose");
        updateHighestScore();
        resetScore();
        location.reload();
    }
    else if (blockleft < -30) {
        updateScore();
    }
}, 10);

function start() {
    block.style.animation = "block 1.5s infinite linear";
}

// Set initial score and highest score values
document.getElementById("scoreValue").textContent = score;
document.getElementById("highestScoreValue").textContent = highestScore;
