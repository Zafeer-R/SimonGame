// var lvl = 1;
// var sequence = "";

// $(document).keydown(function (event) {
//     // console.log(event.key);
//     $("h1").html("LEVEL " + lvl);
//     playGame();
//     lvl++;
// })

// function playGame() {
//     var randomNumber = Math.ceil(Math.random() * 4);
//     sequence += randomNumber.toString();
//     buttonHighlighter(randomNumber);
//     userChance();
// }

// function buttonHighlighter(randomNumber) {
//     var str = "#" + randomNumber;
//     $(str).addClass("highlight");
//     setTimeout(function () {
//         $(str).removeClass("highlight");
//     }, 1000);
// }

// var userSideClickSequence = "";
// function userChance() {
//     var len = 0;
//     while (len < sequence.length) {
//         $("button").click(function () {
//             var s = "#" + this.id;
//             $(s).addClass("highlight");
//             setTimeout(function () {
//                 $(s).removeClass("highlight");
//             }, 250);
//             console.log(this.id);
//         });
//         len++;
//     }

// }