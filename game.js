let buttonColours = ['green', 'red', 'yellow', 'blue'];
let gamePattern = [];
let userClickedPattern = [];

let flag = true;
let level = 0;

$(document).keydown(function () {
    if (flag) {
        flag = false;
        nextSequence();
    }
});

var count = 0;
var index = 0;

$("button").click(function () {
    if (!flag) {
        var userChosenColour = this.className;
        userClickedPattern.push(userChosenColour);

        // Playing audio
        playSound(userChosenColour);

        // Animating user click color
        animatePress(this.id);

        // Dealing with nextSequence call
        var bool = checkAnswer(userClickedPattern);
        if (bool) {
            level++;
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
})

function checkAnswer(colour) {
    if (colour[index] == gamePattern[index]) {
        if (index == level) {
            userClickedPattern = [];
            index = 0;
            return true;
        }
        index++;
    } else {
        errorFun();
    }
    return false;
}

function errorFun() {
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").html("Game Over, Press Any key to restart");
    level = 0;
    flag = true;
    gamePattern = [];
}

function nextSequence() {
    $("h1").html("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + (randomNumber + 1)).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing audio
    playSound(randomChosenColour);
}

function animatePress(currentColourID) {
    var classN = $("#" + currentColourID).attr('class');

    $('.' + classN).addClass("highlight");

    setTimeout(function () {
        $('.' + classN).removeClass("highlight");
    }, 120);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}